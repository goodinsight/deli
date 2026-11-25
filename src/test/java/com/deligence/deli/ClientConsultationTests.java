package com.deligence.deli;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.repository.CooperatorClientRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.not;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(properties = {
        "spring.datasource.url=jdbc:h2:mem:consultations", "spring.datasource.driver-class-name=org.h2.Driver",
        "spring.datasource.username=sa", "spring.datasource.password=", "spring.jpa.hibernate.ddl-auto=create-drop",
        "spring.mvc.pathmatch.matching-strategy=ant_path_matcher"
})
@AutoConfigureMockMvc
@Transactional
class ClientConsultationTests {
    @Autowired MockMvc mvc;
    @Autowired CooperatorClientRepository clients;

    private MockHttpSession session(String role) {
        var user = User.withUsername("employee-test").password("unused").roles(role).build();
        var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
        var session = new MockHttpSession();
        session.setAttribute("SPRING_SECURITY_CONTEXT", new SecurityContextImpl(authentication));
        return session;
    }

    @Test
    void customerAndAdminCanShareHistoryAndDeletionPreservesIt() throws Exception {
        int client = clients.save(CooperatorClient.builder().clientName("Customer A").build()).getClientNo();
        int other = clients.save(CooperatorClient.builder().clientName("Customer B").build()).getClientNo();
        mvc.perform(post("/CooperatorClient/consultations").session(session("CLIENT"))
                .param("clientNo", String.valueOf(client)).param("consultedAt", "2026-11-25T09:30")
                .param("channel", "전화").param("notes", "quotation requested").param("author", "forged-author"))
                .andExpect(redirectedUrl("/CooperatorClient/read?clientNo=" + client));
        mvc.perform(post("/CooperatorClient/consultations").session(session("ADMIN"))
                .param("clientNo", String.valueOf(client)).param("consultedAt", "2026-11-24T10:00")
                .param("channel", "방문").param("notes", "initial meeting"))
                .andExpect(redirectedUrl("/CooperatorClient/read?clientNo=" + client));
        mvc.perform(post("/CooperatorClient/delete").session(session("ADMIN")).param("clientNo", String.valueOf(client)))
                .andExpect(redirectedUrl("/CooperatorClient/read?clientNo=" + client));
        mvc.perform(get("/CooperatorClient/read").session(session("ADMIN")).param("clientNo", String.valueOf(client)))
                .andExpect(status().isOk()).andExpect(content().string(org.hamcrest.Matchers.stringContainsInOrder("quotation requested", "initial meeting")))
                .andExpect(content().string(containsString("employee-test")))
                .andExpect(content().string(not(containsString("forged-author"))));
        mvc.perform(get("/CooperatorClient/read").session(session("CLIENT")).param("clientNo", String.valueOf(other)))
                .andExpect(status().isOk()).andExpect(content().string(not(containsString("quotation requested"))));
    }

    @Test
    void materialRoleCannotReadOrRegisterConsultations() throws Exception {
        mvc.perform(get("/CooperatorClient/read").session(session("MATERIAL"))).andExpect(forwardedUrl("/error/deniedpage"));
        mvc.perform(post("/CooperatorClient/consultations").session(session("MATERIAL"))).andExpect(forwardedUrl("/error/deniedpage"));
    }
}
