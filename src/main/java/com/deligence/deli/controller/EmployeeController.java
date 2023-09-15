package com.deligence.deli.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.deligence.deli.dto.EmployeeJoinDTO;
import com.deligence.deli.service.EmployeeService;

@Controller
@RequestMapping("/employee")
@Log4j2
@RequiredArgsConstructor
public class EmployeeController {

    //의존성 주입
    private final EmployeeService employeeService;

    @GetMapping("/login")
    public void loginGET(String errorCode, String logout) {
        log.info("login get.......");
        log.info("logout: " + logout);

        if(logout != null){
            log.info("user logout........");
        }

    }

    @GetMapping("/join")
    public void joinGET() {

        log.info("join get.......");

    }

    @PostMapping("/join")
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
