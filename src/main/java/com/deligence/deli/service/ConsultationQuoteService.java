package com.deligence.deli.service;

import com.deligence.deli.domain.ConsultationQuote;
import com.deligence.deli.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.ZoneId;
import com.deligence.deli.dto.ProductContractDTO;

@Service
@RequiredArgsConstructor
@Transactional
public class ConsultationQuoteService {
    private final ConsultationQuoteRepository quotes;
    private final ClientConsultationRepository consultations;
    private final ProductsRepository products;

    private final EmployeeRepository employees;
    private final ProductContractService contractService;
    private final ProductContractRepository contracts;

    public int convert(long id, int revision, String username) {
        var consultation = consultations.lockForQuote(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        var quote = quotes.findByConsultation_IdAndRevision(id, revision)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (quote.getContract() != null) {
            return quote.getContract().getProductContractNo();
        }
        var latest = quotes.findFirstByConsultation_IdOrderByRevisionDesc(id).orElseThrow();
        if (quote.getApprovedAt() == null || !quote.getId().equals(latest.getId())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "최신 승인 견적만 전환할 수 있습니다.");
        }
        var employee = employees.findByEmployeeId(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.CONFLICT, "계약 담당자를 확인하세요."));
        var request = ProductContractDTO.builder()
                .productContractCode("PC-Q" + quote.getId())
                .clientNo(consultation.getClient().getClientNo())
                .productNo(quote.getProductNo())
                .productQuantity(quote.getQuantity())
                .productContractDate(LocalDate.now(ZoneId.of("Asia/Seoul")))
                .productDeliveryDate(quote.getDeliveryDate())
                .productQuotation("단가 " + quote.getUnitPrice().toPlainString() + "원 · 합계 " + quote.getTotal().toPlainString() + "원")
                .employeeNo(employee.getEmployeeNo()).build();
        int contractNo = contractService.register(request);
        quote.linkContract(contracts.getReferenceById(contractNo));
        return contractNo;
    }

    public void revise(long id, int baseRevision, int productNo, int quantity, BigDecimal price,
                       LocalDate deliveryDate, String author) {
        if (quantity < 1 || price.signum() < 0 || price.scale() > 2 ||
                price.compareTo(new BigDecimal("100000000000000")) >= 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "수량과 단가를 확인하세요.");
        }
        var consultation = consultations.lockForQuote(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        int latest = quotes.findFirstByConsultation_IdOrderByRevisionDesc(id)
                .map(ConsultationQuote::getRevision).orElse(0);
        if (latest != baseRevision) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "최신 견적을 확인하세요.");
        }
        var product = products.findById(productNo)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "제품을 확인하세요."));
        quotes.save(new ConsultationQuote(consultation, latest + 1, product, quantity, price, deliveryDate, author));
    }

    public void approve(long id, int revision, String username) {
        consultations.lockForQuote(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        var latest = quotes.findFirstByConsultation_IdOrderByRevisionDesc(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (latest.getRevision() != revision || latest.getApprovedAt() != null) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "최신 승인 대기 견적을 확인하세요.");
        }
        latest.approve(username);
    }
}
