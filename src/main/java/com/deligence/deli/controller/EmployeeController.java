package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.deligence.deli.service.EmployeeService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
@Log4j2
@RequiredArgsConstructor
public class EmployeeController {

    //의존성 주입
    private final EmployeeService employeeService;

    @GetMapping("/")
    public String main(Authentication authentication) throws NullPointerException{
        try {
            // 각자 권한에 따라 관리해야하는 페이지로
            Object auth = authentication.getAuthorities();
            log.info("auth : " + auth.toString());
            if (auth.toString().contains("ROLE_ADMIN")) {
                return "redirect:/employee/list";
            } else if (auth.toString().contains("ROLE_PROCUREMENT")) {
                return "redirect:/materialProcurementPlanning/list";
            } else if (auth.toString().contains("ROLE_ORDER")) {
                return "redirect:/order/list";
            } else if (auth.toString().contains("ROLE_MATERIAL")) {
                return "redirect:/material/list";
            } else {
                return "redirect:/board/list";
            }
        } catch (NullPointerException npe){
            // 권한 없는 일반 유저는 게시판으로
            log.info("비로그인 상태의 접속입니다.");
            return "redirect:/board/list";
        }
    }

    @GetMapping("/employee/login")
    public String loginGET(String errorCode, String logout, HttpServletRequest request){
        log.info("login get.......");
        log.info("logout: " + logout);

        if(logout != null){
            log.info("user logout........");

            HttpSession session = request.getSession(false);
            //session이 null이 아니라는건 기존에 세션이 존재했었다는 뜻이므로
            //세션이 null이 아니라면 session.invalidate()로 세션 삭제해주기.
            if(session != null) {
                session.invalidate();

                return "redirect:/employee/login";
            }

        }

        log.info("request.getSession: " + request.getSession(false));
        if(request.getSession(false) != null){
            request.getSession(true).invalidate();
            return "redirect:/employee/login";  // 추후 로그인시 권한에 따라 페이지 이동하게금 변경해야됨
        }else{
            //session = request.getSession(true);
            return logout;
        }

    }

    @PostMapping("/employee/login")
    public String loginPOST(@Valid EmployeeSecurityDTO employeeSecurityDTO,
                            BindingResult bindingResult,
                            RedirectAttributes redirectAttributes){

        log.info("login POST  ......................");

        if (bindingResult.hasErrors()) {
            log.info("has errors.............");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/employee/login";
        }

        log.info(employeeSecurityDTO);

        redirectAttributes.addFlashAttribute("result", employeeSecurityDTO);


        return "redirect:/";
    }

    @GetMapping("/employee/join")
    public void joinGET() {

        log.info("join get.......");

    }

    @PostMapping("/employee/join")
    public String joinPOST(EmployeeJoinDTO employeeJoinDTO, RedirectAttributes redirectAttributes) {

        log.info("join post.....");
        log.info(employeeJoinDTO);

        try{
            employeeService.join(employeeJoinDTO);
        } catch (EmployeeService.MidExistException e) {
            redirectAttributes.addFlashAttribute("error", "employee_id");
            return "redirect:/employee/join";
        }

        redirectAttributes.addFlashAttribute("result", "success");

        return "redirect:/employee/login"; //회원가입후 로그인

    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/employee/list")
    public void list(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<EmployeeJoinDTO> responseDTO = employeeService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }


    @PreAuthorize("isAuthenticated()")
    @GetMapping("/employee/read")
    public void read(int employeeNo, PageRequestDTO pageRequestDTO, Model model){

        EmployeeJoinDTO employeeJoinDTO = employeeService.readOne(employeeNo);

        log.info(employeeJoinDTO);
        log.info(pageRequestDTO);

        model.addAttribute("dto", employeeJoinDTO);

    }


    @PreAuthorize("isAuthenticated()")
    @GetMapping("/employee/modify")
    public void modify(int employeeNo, PageRequestDTO pageRequestDTO, Model model){

        EmployeeJoinDTO employeeJoinDTO1 = employeeService.readOne(employeeNo);

        log.info(employeeJoinDTO1);
        log.info(pageRequestDTO);

        model.addAttribute("dto", employeeJoinDTO1);

    }

    @PreAuthorize("isAuthenticated() and principal.username.equals(#employeeJoinDTO.employeeId)")  // 인가받은 사용자(운영자)와 본인 정보만 접근가능
    @PostMapping("/employee/modify")
    public String modify(PageRequestDTO pageRequestDTO,
                         @Valid EmployeeJoinDTO employeeJoinDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes) {

        log.info("employee modify post................." + employeeJoinDTO);

        if (bindingResult.hasErrors()) {
            log.info("has errors..............");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            redirectAttributes.addAttribute("employeeNo", employeeJoinDTO.getEmployeeNo());

            return "redirect:/employee/modify?" + link;
        }

        employeeService.modify(employeeJoinDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("employeeNo", employeeJoinDTO.getEmployeeNo());

        return "redirect:/employee/read";

    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/employee/remove")
    public String remove(EmployeeJoinDTO employeeJoinDTO, RedirectAttributes redirectAttributes) {

        int employeeNo = employeeJoinDTO.getEmployeeNo();
        log.info("remove post...." + employeeNo);

        employeeService.remove(employeeNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/employee/authority";

    }

    @GetMapping("/employee/authority")
    public void authorityGET(Model model, PageRequestDTO pageRequestDTO) {

        PageResponseDTO<EmployeeAuthorityDTO> responseDTO = employeeService.listForAuthority(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);
    }



    @PreAuthorize("isAuthenticated()")
    @GetMapping("/employee/authorityread")
    public void authorityread(int employeeNo, PageRequestDTO pageRequestDTO, Model model){

        EmployeeAuthorityDTO employeeAuthorityDTO = employeeService.readOneForAuthority(employeeNo);

        log.info(employeeAuthorityDTO);
        log.info(pageRequestDTO);

        model.addAttribute("dto", employeeAuthorityDTO);

    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/employee/authoritymodify")
    public void authoritymodify(int employeeNo, PageRequestDTO pageRequestDTO, Model model){

        EmployeeAuthorityDTO employeeAuthorityDTO1 = employeeService.readOneForAuthority(employeeNo);

        log.info(employeeAuthorityDTO1);
        log.info(pageRequestDTO);

        model.addAttribute("dto", employeeAuthorityDTO1);

    }
    @PreAuthorize("isAuthenticated()")  // 권한 부여는 운영자만 가능
    @PostMapping("/employee/authoritymodify")
    public String authorityPOST(PageRequestDTO pageRequestDTO,
                         @Valid EmployeeAuthorityDTO employeeAuthorityDTO,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes) {

        log.info("employee authority post................." + employeeAuthorityDTO);

        if (bindingResult.hasErrors()) {
            log.info("has errors..............");

            String link = pageRequestDTO.getLink();

            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            redirectAttributes.addAttribute("employeeNo", employeeAuthorityDTO.getEmployeeNo());

            return "redirect:/employee/authoritymodify?" + link;
        }

        employeeService.modify(employeeAuthorityDTO);

        redirectAttributes.addFlashAttribute("result", "modified");

        redirectAttributes.addAttribute("employeeNo", employeeAuthorityDTO.getEmployeeNo());

        return "redirect:/employee/authorityread";

    }


    @GetMapping(value = "/error/deniedpage")
    public String accessDenied(){
        return "/error/deniedpage";
    }

}
