package com.deligence.deli;

import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.domain.MaterialProcurementContract;
import com.deligence.deli.repository.CooperatorSupplierRepository;
import com.deligence.deli.repository.MaterialProcurementContractRepository;
import com.deligence.deli.repository.SupplierInvoiceRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import java.util.concurrent.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(properties = {
        "spring.datasource.url=jdbc:h2:mem:supplier-invoices", "spring.datasource.driver-class-name=org.h2.Driver",
        "spring.datasource.username=sa", "spring.datasource.password=", "spring.jpa.hibernate.ddl-auto=create-drop",
        "spring.mvc.pathmatch.matching-strategy=ant_path_matcher"
})
@AutoConfigureMockMvc
class SupplierInvoiceTests {
    @Autowired MockMvc mvc;
    @Autowired CooperatorSupplierRepository suppliers;
    @Autowired MaterialProcurementContractRepository contracts;
    @Autowired SupplierInvoiceRepository invoices;

    private int contract(CooperatorSupplier supplier) {
        return contracts.save(MaterialProcurementContract.builder().cooperatorSupplier(supplier)
                .materialProcurementContractState("발주진행중").build()).getMaterialProcurementContractNo();
    }

    private MockHttpSession session(String role) {
        var user = User.withUsername("buyer").password("unused").roles(role).build();
        var auth = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
        var session = new MockHttpSession();
        session.setAttribute("SPRING_SECURITY_CONTEXT", new SecurityContextImpl(auth));
        return session;
    }

    private String url(int id) {
        return "/materialProcurementContract/" + id + "/invoices";
    }

    private MockHttpServletRequestBuilder confirm(int id, String number, String amount) {
        return post(url(id)).session(session("PROCUREMENT")).param("number", number).param("amount", amount)
                .param("invoiceDate", "2026-11-25").param("dueDate", "2026-12-15");
    }

    @Test
    void confirmationCreatesOnePayablePerSupplierInvoice() throws Exception {
        var supplier = suppliers.save(CooperatorSupplier.builder().supplierName("공급사 A").build());
        int first = contract(supplier);
        int second = contract(supplier);
        int differentSupplier = contract(suppliers.save(CooperatorSupplier.builder().supplierName("공급사 B").build()));
        mvc.perform(confirm(first, "INV-1", "1000000").session(session("CLIENT"))).andExpect(forwardedUrl("/error/deniedpage"));
        mvc.perform(confirm(first, "INV-1", "1000000")).andExpect(redirectedUrl(url(first)));
        mvc.perform(confirm(first, "INV-1", "1000000.00")).andExpect(redirectedUrl(url(first)));
        mvc.perform(confirm(first, "INV-1", "999")).andExpect(status().isConflict());
        mvc.perform(confirm(second, "INV-1", "1000000")).andExpect(status().isConflict());
        mvc.perform(confirm(differentSupplier, "INV-1", "999")).andExpect(redirectedUrl(url(differentSupplier)));
        mvc.perform(confirm(first, "INV-2", "100000")).andExpect(redirectedUrl(url(first)));
        mvc.perform(confirm(first, "INVALID", "0")).andExpect(status().isBadRequest());
        mvc.perform(get(url(first)).session(session("ADMIN"))).andExpect(status().isOk())
                .andExpect(content().string(containsString("계약 미지급액 1100000.00원")))
                .andExpect(content().string(containsString("INV-2")));
        var entries = invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(first);
        assertThat(entries).hasSize(2).allMatch(i -> i.getConfirmedBy().equals("buyer") && i.getConfirmedAt() != null);
    }

    @Test
    void concurrentSubmissionsRecordOneInvoice() throws Exception {
        int id = contract(suppliers.save(CooperatorSupplier.builder().supplierName("동시 확인").build()));
        var start = new CountDownLatch(1);
        var pool = Executors.newFixedThreadPool(2);
        try {
            Callable<Integer> submit = () -> {
                start.await();
                return mvc.perform(confirm(id, "CONCURRENT", "50000")).andReturn().getResponse().getStatus();
            };
            var a = pool.submit(submit);
            var b = pool.submit(submit);
            start.countDown();
            assertThat(a.get(20, TimeUnit.SECONDS)).isEqualTo(302);
            assertThat(b.get(20, TimeUnit.SECONDS)).isEqualTo(302);
            assertThat(invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(id)).hasSize(1);
        } finally {
            pool.shutdownNow();
        }
    }
}
