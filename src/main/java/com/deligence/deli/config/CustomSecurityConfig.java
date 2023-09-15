package com.deligence.deli.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
import com.deligence.deli.security.CustomUserDetailsService;
import com.deligence.deli.security.handler.Custom403Handler;

import javax.sql.DataSource;

@Log4j2
@Configuration(proxyBeanMethods = false)
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
@ConditionalOnDefaultWebSecurity    // boot 2.7+
@ConditionalOnWebApplication(type=ConditionalOnWebApplication.Type.SERVLET) // boot 2.7+
//public class CustomSecurityConfig extends WebSecurityConfigurerAdapter {  // boot 2.7+ 지원 안함
public class CustomSecurityConfig {

    //주입필요
    private final DataSource dataSource;
    private final CustomUserDetailsService userDetailsService;


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /*

    - SpringBoot에서 이미 default로 SecurityFilterChain을 등록하는 데, @Bean객체로 다시 주입하게 되면서 둘 중 하나만 선택하라는 오류가 나타나는 것이다.

    @ConditionalOnDefaultWebSecurity
    @ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
    위 두 annotation을 class 위에 추가하고,

    @Order(SecurityProperties.BASIC_AUTH_ORDER)
    위 annotation을 filter 함수 위에 추가하면 정상 작동이 된다.

    해결방법
    https://minkukjo.github.io/framework/2021/01/16/Spring-Security-04/

    */
    @Bean
    @Order(SecurityProperties.BASIC_AUTH_ORDER) // boot 2.7+
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        log.info("-------------configure--------------");

        //커스텀 로그인 페이지
        http.formLogin().loginPage("/member/login");
        //CSRF 토큰 비활성화
        http.csrf().disable();

        http.rememberMe()
                .key("12345678")
                .tokenRepository(persistentTokenRepository())
                .userDetailsService(userDetailsService)
                .tokenValiditySeconds(60*60*24*30);
        
        http.exceptionHandling().accessDeniedHandler(accessDeniedHandler());    //403 처리

        return http.build();

    }

    @Bean
    public AccessDeniedHandler accessDeniedHandler() {
        return new Custom403Handler();
    }

    @Bean
    public PersistentTokenRepository persistentTokenRepository() {

        JdbcTokenRepositoryImpl repo = new JdbcTokenRepositoryImpl();
        repo.setDataSource(dataSource);
        return repo;

    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {

        log.info("--------------web configure---------------");

        return (web -> web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations()));

    }

}
