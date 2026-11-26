package com.deligence.deli.controller;

import com.deligence.deli.domain.SupplierInvoice;
import com.deligence.deli.repository.MaterialProcurementContractRepository;
import com.deligence.deli.repository.SupplierInvoiceRepository;
import com.deligence.deli.service.SupplierInvoiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.math.BigDecimal;
import java.security.Principal;
import java.time.LocalDate;

@Controller
@RequiredArgsConstructor
@RequestMapping("/materialProcurementContract/{id}/invoices")
public class SupplierInvoiceController {
    private final MaterialProcurementContractRepository contracts;
    private final SupplierInvoiceRepository invoices;
    private final SupplierInvoiceService service;

    @GetMapping
    public String show(@PathVariable int id, Model model) {
        model.addAttribute("contract", contracts.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)));
        var rows = invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(id);
        model.addAttribute("invoices", rows);
        model.addAttribute("total", rows.stream().map(SupplierInvoice::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add));
        return "materialProcurementContract/invoices";
    }

    @PostMapping
    public String confirm(@PathVariable int id, @RequestParam String number, @RequestParam BigDecimal amount,
                          @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate invoiceDate,
                          @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dueDate, Principal principal) {
        service.confirm(id, number, invoiceDate, dueDate, amount, principal.getName());
        return "redirect:/materialProcurementContract/" + id + "/invoices";
    }
}
