package com.deligence.deli.controller;

import com.deligence.deli.dto.EmployeeSecurityDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.deligence.deli.dto.EmployeeJoinDTO;
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

    @GetMapping("/")    // 시작은 로그인 페이지로
    public String main(){
        return "redirect:/employee/login";
    }

    @GetMapping("/employee/login")
    public String loginGET(String errorCode, String logout, HttpServletRequest request) {
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

        if(request.getSession(false) != null){
            return "redirect:/board/list";  // 추후 로그인시 권한에 따라 페이지 이동하게금 변경해야됨
        } else{
            //session = request.getSession(true);
            return logout;

        }

    }

    @PostMapping("/employee/login")
    public String loginPOST(@Valid EmployeeSecurityDTO employeeSecurityDTO, BindingResult bindingResult, RedirectAttributes redirectAttributes) {

        log.info("login POST  ......................");

        if (bindingResult.hasErrors()) {
            log.info("has errors.............");
            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());

            return "redirect:/employee/login";
        }

        log.info(employeeSecurityDTO);

        redirectAttributes.addFlashAttribute("result", employeeSecurityDTO);

        return "redirect:/board/list";
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

}
