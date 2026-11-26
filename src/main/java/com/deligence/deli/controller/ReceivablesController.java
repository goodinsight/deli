package com.deligence.deli.controller;

import com.deligence.deli.repository.DepositUnmatchRepository;
import com.deligence.deli.repository.BankDepositRepository;
import com.deligence.deli.service.BankDepositService;
import com.deligence.deli.service.ReceivablesReport;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import java.io.IOException;
import java.security.Principal;

@Controller
@RequiredArgsConstructor
@RequestMapping("/productContract/receivables")
public class ReceivablesController {
    private final ReceivablesReport report;
    private final com.deligence.deli.service.DepositReconciliation reconciliation;

    @GetMapping("/reconciliation")
    public String reconciliation(@RequestParam(defaultValue = "false") boolean onlyDifferences, Model model) {
        model.addAttribute("rows", reconciliation.rows(onlyDifferences));
        model.addAttribute("onlyDifferences", onlyDifferences);
        return "productContract/reconciliation";
    }
    private final BankDepositService service;
    private final DepositUnmatchRepository corrections;
    private final BankDepositRepository deposits;

    @GetMapping
    public String report(Model model) {
        model.addAttribute("customers", report.customers());
        return "productContract/receivables";
    }

    @GetMapping("/deposits")
    public String deposits(@RequestParam(required = false) String reference, Model model) {
        model.addAttribute("customers", report.customers());
        model.addAttribute("corrections", reference == null ? corrections.findAllByOrderByIdDesc()
                : corrections.findByDeposit_ReferenceOrderByIdDesc(reference));
        model.addAttribute("reference", reference);
        model.addAttribute("deposits", reference == null ? deposits.findAll(Sort.by("depositDate", "reference").descending())
                : java.util.List.of(deposits.findById(reference).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND))));
        return "productContract/deposits";
    }

    @PostMapping("/deposits")
    public String upload(@RequestParam MultipartFile file, RedirectAttributes redirect) throws IOException {
        if (file.isEmpty() || file.getSize() > 1024 * 1024) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "1MB 이하의 CSV를 선택하세요.");
        int count = service.importCsv(file.getBytes());
        redirect.addFlashAttribute("message", "새 입금 " + count + "건을 가져왔습니다.");
        return "redirect:/productContract/receivables/deposits";
    }

    @PostMapping("/deposits/unmatch")
    public String unmatch(@RequestParam String reference, @RequestParam long receiptId, @RequestParam String reason, Principal principal) {
        service.unmatch(reference, receiptId, reason, principal.getName());
        return "redirect:/productContract/receivables/deposits";
    }

    @PostMapping("/deposits/match")
    public String match(@RequestParam String reference, @RequestParam int contractNo, @RequestParam(required = false) String matchKey,
                        @RequestParam(required = false) java.math.BigDecimal amount, Principal principal) {
        service.match(reference, contractNo, amount, matchKey, principal.getName());
        return "redirect:/productContract/receivables/deposits";
    }
}
