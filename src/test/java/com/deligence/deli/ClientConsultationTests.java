package com.deligence.deli;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.repository.CooperatorClientRepository;
import com.deligence.deli.domain.ClientConsultation;
import com.deligence.deli.domain.Employee;
import com.deligence.deli.domain.EmployeeRole;
import com.deligence.deli.repository.ClientConsultationRepository;
import com.deligence.deli.repository.EmployeeRepository;
import com.deligence.deli.repository.ProductsRepository;
import com.deligence.deli.repository.ConsultationQuoteRepository;
import com.deligence.deli.domain.Products;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.math.BigDecimal;
import com.deligence.deli.domain.ConsultationQuote;
import com.deligence.deli.domain.MaterialRequirementsList;
import com.deligence.deli.dto.ProductionPlanningDTO;
import com.deligence.deli.repository.ProductContractRepository;
import com.deligence.deli.repository.MaterialRequirementsListRepository;
import com.deligence.deli.service.ProductionPlanningService;
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

import static org.assertj.core.api.Assertions.assertThat;
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
        return session(role, "employee-test");
    }

    private MockHttpSession session(String role, String username) {
        var user = User.withUsername(username).password("unused").roles(role).build();
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

    @Autowired EmployeeRepository employees;
    @Autowired ClientConsultationRepository consultations;

    @Test
    void assignedEmployeeCanCompleteTheirPendingContactOnce() throws Exception {
        var owner = Employee.builder().employeeId("owner").employeeName("Owner").build();
        owner.addRole(EmployeeRole.CLIENT);
        employees.save(owner);
        var client = clients.save(CooperatorClient.builder().clientName("Followup Customer").build());
        var consultation = consultations.save(new ClientConsultation(client, LocalDateTime.now(), "author", "전화", "request"));
        String id = consultation.getId().toString();
        var admin = session("ADMIN");
        var assigned = session("CLIENT", "owner");
        mvc.perform(post("/CooperatorClient/consultations/schedule").session(admin)
                .param("id", id).param("employeeNo", String.valueOf(owner.getEmployeeNo())).param("dueDate", "2020-01-01"))
                .andExpect(status().is3xxRedirection());
        mvc.perform(get("/CooperatorClient/followUps").session(assigned)).andExpect(status().isOk())
                .andExpect(content().string(containsString("기한 경과")))
                .andExpect(content().string(containsString("#consultation-" + id)));
        mvc.perform(get("/CooperatorClient/read").session(assigned).param("clientNo", String.valueOf(client.getClientNo())))
                .andExpect(content().string(containsString("/CooperatorClient/consultations/complete")));
        mvc.perform(get("/CooperatorClient/followUps").session(admin))
                .andExpect(content().string(not(containsString("#consultation-" + id))));
        mvc.perform(post("/CooperatorClient/consultations/complete").session(admin)
                .param("id", id).param("result", "wrong user")).andExpect(status().isConflict());
        mvc.perform(post("/CooperatorClient/consultations/complete").session(assigned)
                .param("id", id).param("result", "delivery confirmed")).andExpect(redirectedUrl("/CooperatorClient/followUps"));
        mvc.perform(post("/CooperatorClient/consultations/complete").session(assigned)
                .param("id", id).param("result", "overwrite")).andExpect(status().isConflict());
        mvc.perform(get("/CooperatorClient/followUps").session(assigned))
                .andExpect(content().string(not(containsString("#consultation-" + id))));
        mvc.perform(get("/CooperatorClient/read").session(admin).param("clientNo", String.valueOf(client.getClientNo())))
                .andExpect(content().string(containsString("delivery confirmed")));
    }

    @Autowired ProductsRepository products;
    @Autowired ConsultationQuoteRepository quotes;

    @Test
    void quoteChangesRequireNewApprovalAndPreserveOriginalTerms() throws Exception {
        var client = clients.save(CooperatorClient.builder().clientName("Buyer").build());
        var consultation = consultations.save(new ClientConsultation(client, LocalDateTime.now(), "agent", "전화", "Quote request"));
        var product = products.save(Products.builder().productName("Pump").productCode("P1").build());
        String url = "/CooperatorClient/consultations/" + consultation.getId() + "/quotes";
        var agent = session("CLIENT", "sales");
        var admin = session("ADMIN", "manager");
        mvc.perform(get(url).session(agent)).andExpect(status().isOk());
        for (int revision = 1; revision <= 2; revision++) {
            mvc.perform(post(url).session(agent).param("baseRevision", String.valueOf(revision - 1))
                    .param("productNo", String.valueOf(product.getProductNo())).param("quantity", "2")
                    .param("unitPrice", revision == 1 ? "150.25" : "160").param("deliveryDate", "2027-01-10"))
                    .andExpect(redirectedUrl(url));
            mvc.perform(get(url).session(admin)).andExpect(content().string(containsString("이 버전 승인")));
            mvc.perform(post(url + "/approve").session(agent).param("revision", String.valueOf(revision)))
                    .andExpect(forwardedUrl("/error/deniedpage"));
            if (revision == 2) {
                var pending = quotes.findByConsultation_IdOrderByRevisionDesc(consultation.getId());
                assertThat(pending.get(0).getApprovedAt()).isNull();
                assertThat(pending.get(1).getApprover()).isEqualTo("manager");
                mvc.perform(post(url).session(agent).param("baseRevision", "1")
                        .param("productNo", String.valueOf(product.getProductNo())).param("quantity", "2")
                        .param("unitPrice", "170").param("deliveryDate", "2027-01-10"))
                        .andExpect(status().isConflict());
                mvc.perform(post(url + "/approve").session(admin).param("revision", "1")).andExpect(status().isConflict());
            }
            mvc.perform(post(url + "/approve").session(admin).param("revision", String.valueOf(revision)))
                    .andExpect(redirectedUrl(url));
        }
        var history = quotes.findByConsultation_IdOrderByRevisionDesc(consultation.getId());
        assertThat(history).hasSize(2);
        assertThat(history.get(1).getTotal()).isEqualByComparingTo("300.50");
        assertThat(history.get(0).getTotal()).isEqualByComparingTo("320");
        assertThat(history).allMatch(q -> "manager".equals(q.getApprover()) && q.getApprovedAt() != null);
        mvc.perform(get(url).session(agent)).andExpect(content().string(containsString("승인자 manager")));
    }

    @Autowired ProductContractRepository contracts;
    @Autowired MaterialRequirementsListRepository requirements;
    @Autowired ProductionPlanningService planning;

    @Test
    void approvedRevisionCreatesOneTraceableContractUsableForProduction() throws Exception {
        var customer = clients.save(CooperatorClient.builder().clientName("Contract customer").build());
        var agent = employees.save(Employee.builder().employeeId("sales").employeeName("Sales").build());
        var product = products.save(Products.builder().productName("Pump").productCode("P1").build());
        var consultation = consultations.save(new ClientConsultation(customer, LocalDateTime.now(), "sales", "전화", "order"));
        var due = LocalDate.of(2027, 2, 1);
        var first = quotes.save(new ConsultationQuote(consultation, 1, product, 3, BigDecimal.TEN, due, "sales"));
        first.approve("manager");
        var latest = quotes.save(new ConsultationQuote(consultation, 2, product, 5, BigDecimal.TEN, due, "sales"));
        var sales = session("CLIENT", "sales");
        String url = "/CooperatorClient/consultations/" + consultation.getId() + "/quotes";
        for (String revision : new String[]{"1", "2"}) {
            mvc.perform(post(url + "/contract").session(sales).param("revision", revision)).andExpect(status().isConflict());
        }
        latest.approve("manager");
        mvc.perform(post(url + "/contract").session(sales).param("revision", "2")).andExpect(status().is3xxRedirection());
        var contract = latest.getContract();
        int number = contract.getProductContractNo();
        String detail = "/productContract/read?productContractNo=" + number;
        mvc.perform(post(url + "/contract").session(sales).param("revision", "2")).andExpect(redirectedUrl(detail));
        assertThat(contracts.count()).isEqualTo(1);
        assertThat(contract.getCooperatorClient().getClientNo()).isEqualTo(customer.getClientNo());
        assertThat(contract.getProducts().getProductNo()).isEqualTo(product.getProductNo());
        assertThat(contract.getProductQuantity()).isEqualTo(5);
        assertThat(contract.getProductDeliveryDate()).isEqualTo(due);
        assertThat(contract.getProductContractState()).isEqualTo("자재검토중");
        mvc.perform(get(detail).session(sales)).andExpect(status().isOk())
                .andExpect(content().string(containsString("#quote-" + latest.getId())));
        var bom = requirements.save(MaterialRequirementsList.builder().products(product).quantity(1).build());
        int plan = planning.register(ProductionPlanningDTO.builder().productContractNo(number)
                .materialRequirementsListNo(bom.getMaterialRequirementsListNo()).employeeNo(agent.getEmployeeNo())
                .productionQuantity(5).productionDeliveryDate(due).build());
        assertThat(plan).isPositive();
    }

    @Test
    void materialRoleCannotReadOrRegisterConsultations() throws Exception {
        mvc.perform(get("/CooperatorClient/read").session(session("MATERIAL"))).andExpect(forwardedUrl("/error/deniedpage"));
        mvc.perform(post("/CooperatorClient/consultations").session(session("MATERIAL"))).andExpect(forwardedUrl("/error/deniedpage"));
    }
}
