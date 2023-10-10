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
        //http.formLogin().loginPage("/employee/login");
        http.authorizeHttpRequests()
                .antMatchers("/", "/employee/login", "/employee/join").permitAll()    // 비로그인시에도 접근
                .antMatchers("/employee/remove","/employee/authority","employee/authorityread", "employee/authoritymodify","/board/modify","/board/remove").hasRole("ADMIN")    //   /employee/ 수정, 삭제 url은 ROLE_ADMIN 롤을 가진 사람만 접근
                .antMatchers("/employee/list","/employee/read","/employee/modify").hasAnyRole("ADMIN","MATERIAL", "ORDER", "PROCUREMENT", "PRODUCT", "COOPERATOR", "PARTNER") // 담당자들은 employee list를 볼 수 있음
                .antMatchers("/board/list", "/board/read", "/board/register").hasAnyRole("USER", "ADMIN","MATERIAL", "ORDER", "PROCUREMENT", "PRODUCT", "CLIENT", "SUPPLIER", "PRODUCTION")   //일반회원은 보드만 접근 가능
                .antMatchers("/material/**", "/materialInventory/**").hasAnyRole("MATERIAL", "PRODUCTION", "ADMIN")   //자재 담당자와 admin만 접근, 생산관리담당자는 재고확인을 해야하므로 추가
                .antMatchers("/order/**").hasAnyRole("ORDER", "ADMIN")  // 발주 담당자와 admin만 접근
                .antMatchers("/product/**").hasAnyRole("CLIENT", "PRODUCTION", "PRODUCT", "ADMIN")  // 제품계약 담당자, 제품담당자, 생산계획담당자와 admin만 접근
                .antMatchers("/production/**").hasAnyRole("PRODUCTION","MATERIAL", "ADMIN")  // 생산계획 담당자, 자재조달 담당자와 admin만 접근
                .antMatchers("/materialProcurementContract/**", "/materialProcurementPlanning/**").hasAnyRole("PROCUREMENT","ADMIN")    //조달 담당자와 admin만 접근
                .anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/employee/login").defaultSuccessUrl("/board/list")
                .usernameParameter("username").passwordParameter("password")
                .and()
                .logout().invalidateHttpSession(true).deleteCookies("JSESSIONID");

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
