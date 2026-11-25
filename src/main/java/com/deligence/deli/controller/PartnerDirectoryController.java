package com.deligence.deli.controller;

import com.deligence.deli.domain.PartnerLink;
import com.deligence.deli.repository.CooperatorClientRepository;
import com.deligence.deli.repository.CooperatorSupplierRepository;
import com.deligence.deli.repository.PartnerLinkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import java.security.Principal;

@Controller
@RequiredArgsConstructor
@RequestMapping("/partnerDirectory")
public class PartnerDirectoryController {
    private final CooperatorClientRepository clients;
    private final CooperatorSupplierRepository suppliers;
    private final PartnerLinkRepository links;

    @GetMapping
    @Transactional(readOnly = true)
    public String directory(Model model) {
        model.addAttribute("links", links.directory());
        model.addAttribute("clients", clients.findUnlinked());
        model.addAttribute("suppliers", suppliers.findUnlinked());
        return "partnerDirectory";
    }

    @PostMapping("/link")
    public String link(@RequestParam int clientNo, @RequestParam int supplierNo, Principal principal,
                       RedirectAttributes redirect) {
        var client = clients.findById(clientNo).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        var supplier = suppliers.findById(supplierNo).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        try {
            links.saveAndFlush(new PartnerLink(client, supplier, principal.getName()));
        } catch (DataIntegrityViolationException conflict) {
            redirect.addFlashAttribute("message", "거래처 연결 상태가 변경되었습니다. 목록을 다시 확인하세요.");
        }
        return "redirect:/partnerDirectory";
    }

    @PostMapping("/unlink")
    public String unlink(@RequestParam long linkId) {
        links.findById(linkId).ifPresent(links::delete);
        return "redirect:/partnerDirectory";
    }
}
