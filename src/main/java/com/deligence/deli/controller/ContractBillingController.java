package com.deligence.deli.controller;

import com.deligence.deli.repository.BankDepositRepository;
import com.deligence.deli.repository.DepositUnmatchRepository;
import com.deligence.deli.service.ContractBillingService;
import com.deligence.deli.repository.ContractLedgerRepository;
import com.deligence.deli.repository.ConsultationQuoteRepository;
import com.deligence.deli.repository.ProductContractRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.math.BigDecimal;
import java.time.LocalDate;
import org.springframework.format.annotation.DateTimeFormat;
import java.security.Principal;
import java.util.UUID;

@Controller
@RequestMapping("/productContract/{id}/billing")
@RequiredArgsConstructor
public class ContractBillingController {
    private final ContractBillingService billing;
    private final ContractLedgerRepository ledger;
    private final DepositUnmatchRepository corrections;
    private final BankDepositRepository deposits;
    private final ProductContractRepository contracts;
    private final ConsultationQuoteRepository quotes;

    @GetMapping
    public String show(@PathVariable int id, Model model) {
        model.addAttribute("contract", contracts.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
        var entries = ledger.findByContract_ProductContractNoOrderByIdAsc(id);
        model.addAttribute("entries", entries);
        var bankReferences = new java.util.HashMap<Long, String>();
        for (var deposit : deposits.findByContract(id)) {
            for (var receipt : deposit.getActiveReceipts()) {
                if (receipt.getContract().getProductContractNo() == id) bankReferences.put(receipt.getId(), deposit.getReference());
            }
        }
        for (var correction : corrections.findByReceipt_Contract_ProductContractNo(id)) {
            bankReferences.put(correction.getReceipt().getId(), correction.getDeposit().getReference());
        }
        model.addAttribute("bankReferences", bankReferences);
        var reversedIds = entries.stream().filter(entry -> entry.isReversal())
                .map(entry -> entry.getReversedReceipt().getId()).collect(java.util.stream.Collectors.toSet());
        model.addAttribute("reversedIds", reversedIds);
        model.addAttribute("cancelled", entries.stream().anyMatch(e -> e.isInvoiceCancellation()));
        model.addAttribute("netReceipts", ContractBillingService.netReceipts(entries));
        model.addAttribute("balance", ContractBillingService.balance(entries));
        model.addAttribute("requestId", UUID.randomUUID());
        if (entries.isEmpty()) {
            quotes.findByContract_ProductContractNo(id).ifPresent(q -> model.addAttribute("suggested", q.getTotal()));
        }
        return "productContract/billing";
    }

    @PostMapping("/invoice/cancel")
    public String cancel(@PathVariable int id, @RequestParam String reason,
                         @RequestParam(defaultValue = "false") boolean reconciled, Principal principal) {
        billing.cancelInvoice(id, reason, reconciled, principal.getName());
        return "redirect:/productContract/" + id + "/billing";
    }

    @PostMapping("/receipts/{receiptId}/settle")
    public String settle(@PathVariable int id, @PathVariable long receiptId, @RequestParam String reason, Principal principal) {
        billing.confirmSettlement(id, receiptId, reason, principal.getName());
        return "redirect:/productContract/" + id + "/billing";
    }

    @PostMapping("/due-date")
    public String dueDate(@PathVariable int id, @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dueDate) {
        billing.setMissingDueDate(id, dueDate);
        return "redirect:/productContract/" + id + "/billing";
    }

    @PostMapping("/invoice")
    public String invoice(@PathVariable int id, @RequestParam BigDecimal amount,
                          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dueDate,
                          Principal principal) {
        billing.invoice(id, amount, dueDate, principal.getName());
        return "redirect:/productContract/" + id + "/billing";
    }

    @PostMapping("/receipts/{receiptId}/reverse")
    public String reverse(@PathVariable int id, @PathVariable long receiptId, @RequestParam String reason, Principal principal) {
        billing.reverseReceipt(id, receiptId, reason, principal.getName());
        return "redirect:/productContract/" + id + "/billing";
    }

    @PostMapping("/receipts")
    public String receive(@PathVariable int id, @RequestParam UUID requestId, @RequestParam BigDecimal amount, Principal principal) {
        billing.receive(id, requestId, amount, principal.getName());
        return "redirect:/productContract/" + id + "/billing";
    }
}
