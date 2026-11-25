package com.deligence.deli.controller;

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
    private final BankDepositService service;
    private final BankDepositRepository deposits;

    @GetMapping
    public String report(Model model) {
        model.addAttribute("customers", report.customers());
        return "productContract/receivables";
    }

    @GetMapping("/deposits")
    public String deposits(Model model) {
        model.addAttribute("customers", report.customers());
        model.addAttribute("deposits", deposits.findAll(Sort.by("depositDate", "reference").descending()));
        return "productContract/deposits";
    }

    @PostMapping("/deposits")
    public String upload(@RequestParam MultipartFile file, RedirectAttributes redirect) throws IOException {
        if (file.isEmpty() || file.getSize() > 1024 * 1024) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "1MB 이하의 CSV를 선택하세요.");
        int count = service.importCsv(file.getBytes());
        redirect.addFlashAttribute("message", "새 입금 " + count + "건을 가져왔습니다.");
        return "redirect:/productContract/receivables/deposits";
    }

    @PostMapping("/deposits/match")
    public String match(@RequestParam String reference, @RequestParam int contractNo, Principal principal) {
        service.match(reference, contractNo, principal.getName());
        return "redirect:/productContract/receivables/deposits";
    }
}
