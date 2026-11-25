package com.deligence.deli.controller;

import com.deligence.deli.repository.*;
import com.deligence.deli.service.ConsultationQuoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.math.BigDecimal;
import java.security.Principal;
import java.time.LocalDate;

@Controller
@RequestMapping("/CooperatorClient/consultations/{id}/quotes")
@RequiredArgsConstructor
public class ConsultationQuoteController {
    private final ClientConsultationRepository consultations;
    private final ConsultationQuoteRepository quotes;
    private final ProductsRepository products;
    private final ConsultationQuoteService service;

    @GetMapping
    public String show(@PathVariable long id, Model model) {
        var consultation = consultations.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        var history = quotes.findByConsultation_IdOrderByRevisionDesc(id);
        model.addAttribute("consultation", consultation);
        model.addAttribute("history", history);
        model.addAttribute("latest", history.isEmpty() ? null : history.get(0));
        model.addAttribute("products", products.findAll());
        return "CooperatorClient/quotes";
    }

    @PostMapping
    public String revise(@PathVariable long id, @RequestParam int baseRevision, @RequestParam int productNo,
                         @RequestParam int quantity, @RequestParam BigDecimal unitPrice,
                         @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate deliveryDate,
                         Principal principal) {
        service.revise(id, baseRevision, productNo, quantity, unitPrice, deliveryDate, principal.getName());
        return "redirect:/CooperatorClient/consultations/" + id + "/quotes";
    }

    @PostMapping("/contract")
    public String convert(@PathVariable long id, @RequestParam int revision, Principal principal) {
        int contractNo = service.convert(id, revision, principal.getName());
        return "redirect:/productContract/read?productContractNo=" + contractNo;
    }

    @PostMapping("/approve")
    @PreAuthorize("hasRole('ADMIN')")
    public String approve(@PathVariable long id, @RequestParam int revision, Principal principal) {
        service.approve(id, revision, principal.getName());
        return "redirect:/CooperatorClient/consultations/" + id + "/quotes";
    }
}
