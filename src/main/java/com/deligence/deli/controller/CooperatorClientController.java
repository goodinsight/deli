package com.deligence.deli.controller;

import com.deligence.deli.dto.CooperatorClientDTO;
import com.deligence.deli.dto.EmployeeSecurityDTO;
import com.deligence.deli.dto.PageRequestDTO;
import com.deligence.deli.dto.PageResponseDTO;
import com.deligence.deli.service.CooperatorClientService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import com.deligence.deli.domain.ClientConsultation;
import com.deligence.deli.repository.ClientConsultationRepository;
import com.deligence.deli.repository.CooperatorClientRepository;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequestMapping("/CooperatorClient")
@Log4j2
@RequiredArgsConstructor
public class CooperatorClientController {

    private final CooperatorClientService cooperatorClientService;

    private final ClientConsultationRepository consultations;
    private final CooperatorClientRepository clients;
    private static final List<String> CHANNELS = List.of("전화", "이메일", "방문", "기타");

    @PostMapping("/consultations")
    public String addConsultation(@RequestParam int clientNo,
                                  @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime consultedAt,
                                  @RequestParam String channel, @RequestParam String notes,
                                  Principal principal, RedirectAttributes redirect) {
        redirect.addAttribute("clientNo", clientNo);
        if (!CHANNELS.contains(channel) || notes.isBlank() || notes.length() > 2000) {
            redirect.addFlashAttribute("consultationMessage", "연락 방식과 상담 내용(1~2000자)을 확인하세요.");
        } else {
            consultations.save(new ClientConsultation(clients.findById(clientNo)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)),
                    consultedAt, principal.getName(), channel, notes.strip()));
        }
        return "redirect:/CooperatorClient/read";
    }

    @GetMapping("/list") //전체조회
    public void list(PageRequestDTO pageRequestDTO, Model model){

        PageResponseDTO<CooperatorClientDTO> responseDTO = cooperatorClientService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }

    @GetMapping("/register")
    public void registerGET(@AuthenticationPrincipal EmployeeSecurityDTO employeeSecurityDTO, Model model){

        log.info(employeeSecurityDTO);

        model.addAttribute("user", employeeSecurityDTO);

    }

    @PostMapping("/register") //등록(추가)
    public String registerPost(@Valid CooperatorClientDTO cooperatorClientDTO,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes){

        log.info("CooperatorClient POST register...");
        log.info(cooperatorClientDTO);

        if (bindingResult.hasErrors()) {
            log.info("has errors...");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
            return "redirect:/CooperatorClient/register";
        }


        int clientNo = cooperatorClientService.register(cooperatorClientDTO);

        redirectAttributes.addFlashAttribute("result", clientNo);

        return "redirect:/CooperatorClient/list";

    }

    @GetMapping({"/read", "/modify"}) //상세조회 + 수정
    public void read(int clientNo, PageRequestDTO pageRequestDTO, Model model){

        log.info("clientNo : "+clientNo);

        CooperatorClientDTO cooperatorClientDTO = cooperatorClientService.read(clientNo);

        log.info(cooperatorClientDTO);

        model.addAttribute("dto", cooperatorClientDTO);
        model.addAttribute("channels", CHANNELS);
        model.addAttribute("consultations", consultations.findByClient_ClientNoOrderByConsultedAtDescIdDesc(clientNo));

        model.addAttribute("pageRequestDTO", pageRequestDTO);

    }

    @PostMapping("/modify") // 수정
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid CooperatorClientDTO cooperatorClientDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes) {

        log.info("client modify post....." + cooperatorClientDTO);

        if (bindingResult.hasErrors()) {
            log.info("has errors.....");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            redirectAttributes.addAttribute("clientNo", cooperatorClientDTO.getClientNo());

            return "redirect:/CooperatorClient/modify?"+link;
        }

        cooperatorClientService.modify(cooperatorClientDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("clientNo", cooperatorClientDTO.getClientNo());

        return "redirect:/CooperatorClient/read";
    }

    @PostMapping("/delete")
    public String delete(int clientNo, RedirectAttributes redirectAttributes){

        log.info("delete post.." + clientNo);

        if (consultations.existsByClient_ClientNo(clientNo)) {
            redirectAttributes.addFlashAttribute("consultationMessage", "상담 이력이 있는 고객사는 삭제할 수 없습니다.");
            redirectAttributes.addAttribute("clientNo", clientNo);
            return "redirect:/CooperatorClient/read";
        }
        cooperatorClientService.delete(clientNo);

        redirectAttributes.addFlashAttribute("result", "delete");

        return "redirect:/CooperatorClient/list";
    }
}
