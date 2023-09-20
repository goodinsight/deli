package com.deligence.deli.controller;

import com.deligence.deli.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.deligence.deli.service.EmployeeService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

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

    @GetMapping("/employee/list")
    public void list(PageRequestDTO pageRequestDTO, Model model) {

        PageResponseDTO<EmployeeJoinDTO> responseDTO = employeeService.list(pageRequestDTO);

        log.info(responseDTO);

        model.addAttribute("responseDTO", responseDTO);

    }


    @PreAuthorize("isAuthenticated()")
    @GetMapping({"/employee/read", "/employee/modify"})
    public void read(int employeeNo, PageRequestDTO pageRequestDTO, Model model){

        EmployeeJoinDTO employeeJoinDTO = employeeService.readOne(employeeNo);

        log.info(employeeJoinDTO);
        log.info(pageRequestDTO);

        model.addAttribute("dto", employeeJoinDTO);

    }

//    /**
//     * 회원 이름 변경
//     * @param model
//     * @param authentication 인증 정보
//     * @return 회원 이름 변경 페이지
//     */
//    @GetMapping("/employee/modify")
//    public void modify(int employeeNo, PageRequestDTO pageRequestDTO, Model model, Authentication authentication){
//
//        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//
//        EmployeeJoinDTO employeeJoinDTO = employeeService.findEmployee(userDetails.getUsername());
//
//        log.info(employeeJoinDTO);
//        log.info(pageRequestDTO);
//
//        model.addAttribute("dto", employeeJoinDTO);
//
//    }

//    /**
//     * 회원 이름 변경 post
//     * @param memberUsernameUpdateDTO
//     * @param errors
//     * @param model
//     * @return 회원 정보 페이지
//     */
//    @PreAuthorize("principal.username == #employeeJoinDTO.employeeId")
//    @PostMapping("/employee/modify")
//    public String modify(PageRequestDTO pageRequestDTO,
//                         @Valid EmployeeJoinDTO employeeJoinDTO,
//                         BindingResult bindingResult,
//                         RedirectAttributes redirectAttributes,
//                         Errors errors,
//                         Authentication authentication,
//                         Model model) {
//
//        if (errors.hasErrors()) {
//            model.addAttribute("member", employeeJoinDTO);
//            globalService.messageHandling(errors, model);
//            return "/employee/modify";
//        }
//
//        log.info("employee modify post................." + employeeJoinDTO);
//
//        if(bindingResult.hasErrors()) {
//            log.info("has errors..............");
//
//            String link = pageRequestDTO.getLink();
//
//            redirectAttributes.addFlashAttribute("errors", bindingResult.getAllErrors());
//
//            redirectAttributes.addAttribute("employeeNo", employeeJoinDTO.getEmployeeNo());
//
//            return "redirect:/employee/modify?"+link;
//        }
//
//        employeeService.modify(employeeJoinDTO);
//
//        redirectAttributes.addFlashAttribute("result", "modified");
//
//        redirectAttributes.addAttribute("employeeNo", employeeJoinDTO.getEmployeeNo());
//
//        return "redirect:/employee/read";
//
//    }

    @PreAuthorize("principal.username == #employeeJoinDTO.employeeId")
    @PostMapping("/employee/remove")
    public String remove(EmployeeJoinDTO employeeJoinDTO, RedirectAttributes redirectAttributes) {

        int employeeNo = employeeJoinDTO.getEmployeeNo();
        log.info("remove post...." + employeeNo);

        employeeService.remove(employeeNo);

        redirectAttributes.addFlashAttribute("result", "removed");

        return "redirect:/employee/list";

    }

}
