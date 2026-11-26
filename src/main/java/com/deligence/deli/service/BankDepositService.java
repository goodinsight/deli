package com.deligence.deli.service;

import com.deligence.deli.repository.DepositUnmatchRepository;
import com.deligence.deli.domain.BankDeposit;
import com.deligence.deli.domain.DepositUnmatch;
import com.deligence.deli.repository.BankDepositRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.csv.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import javax.persistence.EntityManager;
import java.io.*;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.*;

@Service
@RequiredArgsConstructor
@Transactional
public class BankDepositService {
    private static final List<String> HEADER = List.of("거래번호", "입금일", "입금액", "입금자");
    private final DepositUnmatchRepository corrections;
    private final BankDepositRepository deposits;
    private final EntityManager em;
    private final ContractBillingService billing;

    public int importCsv(byte[] bytes) {
        String csv;
        try {
            csv = StandardCharsets.UTF_8.newDecoder().decode(java.nio.ByteBuffer.wrap(bytes)).toString();
        } catch (java.nio.charset.CharacterCodingException ex) {
            throw invalid("UTF-8 파일을 선택하세요.");
        }
        if (csv.startsWith("\uFEFF")) csv = csv.substring(1);
        var format = CSVFormat.DEFAULT.builder().setHeader().setSkipHeaderRecord(true).setTrim(true).build();
        int added = 0;
        try (var parser = CSVParser.parse(csv, format)) {
            if (!parser.getHeaderNames().equals(HEADER)) throw invalid("CSV 열 이름과 순서를 확인하세요.");
            for (CSVRecord row : parser.getRecords()) {
                if (row.size() != HEADER.size()) throw invalid("CSV 열 개수가 잘못되었습니다.");
                String reference = row.get(0);
                String payer = row.get(3);
                if (reference.isBlank() || reference.length() > 100 || payer.isBlank() || payer.length() > 100) {
                    throw invalid("거래번호와 입금자는 1~100자로 입력하세요.");
                }
                LocalDate date = LocalDate.parse(row.get(1));
                if (!row.get(2).matches("[0-9]{1,24}(\\.[0-9]{1,2})?")) throw invalid("입금액 형식을 확인하세요.");
                BigDecimal amount = new BigDecimal(row.get(2));
                if (amount.signum() <= 0) throw invalid("입금액은 양수여야 합니다.");
                var existing = deposits.findById(reference);
                if (existing.isPresent()) {
                    var prior = existing.get();
                    if (!prior.getDepositDate().equals(date) || prior.getAmount().compareTo(amount) != 0 || !prior.getPayer().equals(payer)) {
                        throw new ResponseStatusException(HttpStatus.CONFLICT, "같은 거래번호의 입금 내용이 다릅니다.");
                    }
                } else {
                    em.persist(new BankDeposit(reference, date, amount, payer));
                    added++;
                }
            }
        } catch (IOException | UncheckedIOException | DateTimeParseException ex) {
            throw invalid("CSV 형식 또는 입금일을 확인하세요.");
        }
        return added;
    }

    public void match(String reference, int contractNo, String matchKey, String username) {
        var deposit = deposits.lockDeposit(reference).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (matchKey == null ? corrections.existsByDeposit_Reference(reference) : !deposit.getReceiptKey().equals(matchKey)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "입금 연결 상태가 변경되었습니다. 목록을 갱신하세요.");
        }
        if (deposit.getContractNo() != null) {
            if (deposit.getContractNo() != contractNo) throw new ResponseStatusException(HttpStatus.CONFLICT, "이미 다른 계약에 연결했습니다.");
            return;
        }
        var receipt = billing.receive(contractNo, UUID.fromString(deposit.getReceiptKey()), deposit.getAmount(), username);
        deposit.match(receipt);
    }

    public void unmatch(String reference, long receiptId, String reason, String user) {
        String explanation = reason.strip();
        if (explanation.isEmpty() || explanation.length() > 250) throw invalid("연결 해제 사유를 1~250자로 입력하세요.");
        var deposit = deposits.lockDeposit(reference).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (corrections.existsByDeposit_ReferenceAndReceipt_Id(reference, receiptId)) return;
        if (deposit.getReceipt() == null || deposit.getReceipt().getId() != receiptId) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "현재 연결된 수금을 확인하세요.");
        }
        billing.reverseReceipt(deposit.getContractNo(), receiptId, explanation, user);
        corrections.save(new DepositUnmatch(deposit, explanation, user));
        deposit.unmatch();
    }

    private ResponseStatusException invalid(String message) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
    }
}
