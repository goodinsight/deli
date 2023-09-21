package com.deligence.deli.security.handler;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.access.AccessDeniedHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Log4j2
public class Custom403Handler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException, NullPointerException {

        log.info("------------ACCESS DENIED--------------");

        response.setStatus(HttpStatus.FORBIDDEN.value());   //접근 권한이 없는(=인가되지 않은) 사용자의 경우 403 http status code를 응답


        try {
            if (accessDeniedException instanceof AccessDeniedException) {
                Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
                if (authentication != null && ((User) authentication.getPrincipal()).getAuthorities().contains(new SimpleGrantedAuthority("ROLE_USER"))) {
                    request.setAttribute("msg", "접근권한 없는 사용자입니다."); //접근 권한이 없는(=인가되지 않은) 사용자
                    request.setAttribute("nextPage", "/");  //    "/" 페이지로 redirect
                } else {
                    request.setAttribute("msg", "로그인 권한이 없는 아이디입니다.");
                    request.setAttribute("nextPage", "/employee/login");        // login페이지로 redirect
                    response.setStatus(HttpStatus.UNAUTHORIZED.value());    //로그인 권한이 없는(=인증되지 않은) 사용자의 경우 401 http status code를 응답
                    SecurityContextHolder.clearContext();   //강제로 로그아웃 처리되도록 SecurityContextHolder를 clear
                }
            } else {
                log.info("Exception : " + accessDeniedException.getClass().getCanonicalName());
            }



            //JSON 요청이었는지 확인
            String contentType = request.getHeader("Content-Type");

            boolean jsonRequest = contentType.startsWith("application/json");

            log.info("isJSON : " + jsonRequest);

            //일반 request
            if (!jsonRequest) {

                // response.sendRedirect("/employee/login?error=ACCESS_DENIED");
                request.getRequestDispatcher("/error/deniedpage").forward(request, response);    //msg와 nextPage attribute를 이용하여 alert를 띄우며 다음 페이지도 이동

            }
        } catch (NullPointerException npe) {
            log.error("nullpointerror : " +npe.getMessage());
            request.setAttribute("msg", "해당페이지에 대한 권한이 없는 아이디입니다.");
            request.setAttribute("nextPage", "/");
            request.getRequestDispatcher("/error/deniedpage").forward(request, response);
        }



    }
}
