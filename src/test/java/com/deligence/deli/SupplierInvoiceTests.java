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
    void partialPaymentsCanBeCorrectedWithoutLosingTheOriginalRecord() throws Exception {
        int id = contract(suppliers.save(CooperatorSupplier.builder().supplierName("지급 공급사").build()));
        mvc.perform(confirm(id, "PAY-1", "1100000")).andExpect(redirectedUrl(url(id)));
        long invoice = invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(id).get(0).getId();
        String payments = url(id) + "/" + invoice + "/payments";
        String key = java.util.UUID.randomUUID().toString();
        var buyer = session("PROCUREMENT");
        mvc.perform(post(payments).session(session("CLIENT")).param("amount", "400000").param("requestId", key))
                .andExpect(forwardedUrl("/error/deniedpage"));
        for (int i = 0; i < 2; i++) {
            mvc.perform(post(payments).session(buyer).param("amount", "400000.00").param("requestId", key))
                    .andExpect(redirectedUrl(url(id)));
        }
        mvc.perform(get(url(id)).session(buyer)).andExpect(content().string(containsString("계약 미지급액 700000.00원")));
        mvc.perform(post(payments).session(buyer).param("amount","700001").param("requestId", java.util.UUID.randomUUID().toString()))
                .andExpect(status().isConflict());
        mvc.perform(post(payments).session(buyer).param("amount","300000").param("requestId", key)).andExpect(status().isConflict());
        var original = invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(id).get(0).getPayments().get(0);
        String cancel = payments + "/" + original.getId() + "/cancel";
        mvc.perform(post(cancel).session(buyer).param("reason"," ")).andExpect(status().isBadRequest());
        for (int i = 0; i < 2; i++) {
            mvc.perform(post(cancel).session(buyer).param("reason","금액 오입력")).andExpect(redirectedUrl(url(id)));
        }
        mvc.perform(get(url(id)).session(buyer)).andExpect(content().string(containsString("계약 미지급액 1100000.00원")))
                .andExpect(content().string(containsString("금액 오입력")));
        mvc.perform(post(payments).session(buyer).param("amount","350000").param("requestId", java.util.UUID.randomUUID().toString()))
                .andExpect(redirectedUrl(url(id)));
        var row = invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(id).get(0);
        assertThat(row.getPayments()).hasSize(2);
        assertThat(row.getPayments().get(0).getAmount()).isEqualByComparingTo("400000");
        assertThat(row.getPayments().get(0).getCancelledBy()).isEqualTo("buyer");
        assertThat(row.getOutstandingAmount()).isEqualByComparingTo("750000");
    }

    @Test
    void reportGroupsOutstandingBalancesBySupplierAndUsesKoreanDueDates() throws Exception {
        var supplier = suppliers.save(CooperatorSupplier.builder().supplierName("현황 검증").build());
        int late = contract(supplier);
        int current = contract(supplier);
        var today = java.time.LocalDate.now(java.time.ZoneId.of("Asia/Seoul"));
        var buyer = session("PROCUREMENT");
        String report = "/materialProcurementContract/payables";
        mvc.perform(get(report).session(session("CLIENT"))).andExpect(forwardedUrl("/error/deniedpage"));
        mvc.perform(post(url(late)).session(buyer).param("number","LATE-REPORT").param("amount","1100000")
                .param("invoiceDate",today.minusDays(2).toString()).param("dueDate",today.minusDays(1).toString()))
                .andExpect(redirectedUrl(url(late)));
        mvc.perform(post(url(current)).session(buyer).param("number","TODAY-REPORT").param("amount","300000")
                .param("invoiceDate",today.toString()).param("dueDate",today.toString())).andExpect(redirectedUrl(url(current)));
        var invoice = invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(late).get(0);
        String payments = url(late) + "/" + invoice.getId() + "/payments";
        mvc.perform(post(payments).session(buyer).param("requestId",java.util.UUID.randomUUID().toString()).param("amount","400000"))
                .andExpect(redirectedUrl(url(late)));
        mvc.perform(get(report).session(buyer)).andExpect(status().isOk())
                .andExpect(content().string(containsString("총 미지급 1000000.00원 · 연체 700000.00원")))
                .andExpect(content().string(containsString(url(late) + "#invoice-" + invoice.getId())))
                .andExpect(content().string(containsString(">오늘<")));
        mvc.perform(post(payments).session(buyer).param("requestId",java.util.UUID.randomUUID().toString()).param("amount","700000"))
                .andExpect(redirectedUrl(url(late)));
        mvc.perform(get(report).session(buyer)).andExpect(content().string(org.hamcrest.Matchers.not(containsString("LATE-REPORT"))));
        var lastPayment = invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(late).get(0).getPayments().get(1);
        mvc.perform(post(payments + "/" + lastPayment.getId() + "/cancel").session(buyer).param("reason","정정"))
                .andExpect(redirectedUrl(url(late)));
        mvc.perform(get(report).session(session("ADMIN")))
                .andExpect(content().string(containsString("총 미지급 1000000.00원 · 연체 700000.00원")));
    }

    @Test
    void concurrentPaymentsCannotExceedTheInvoice() throws Exception {
        int id = contract(suppliers.save(CooperatorSupplier.builder().supplierName("병렬 지급").build()));
        mvc.perform(confirm(id, "P-2", "100")).andExpect(redirectedUrl(url(id)));
        long invoice = invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(id).get(0).getId();
        var start = new CountDownLatch(1);
        var pool = Executors.newFixedThreadPool(2);
        try {
            Callable<Integer> submit = () -> {
                start.await();
                return mvc.perform(post(url(id) + "/" + invoice + "/payments").session(session("ADMIN"))
                        .param("requestId", java.util.UUID.randomUUID().toString()).param("amount","70"))
                        .andReturn().getResponse().getStatus();
            };
            var first = pool.submit(submit);
            var second = pool.submit(submit);
            start.countDown();
            assertThat(java.util.List.of(first.get(20, TimeUnit.SECONDS), second.get(20, TimeUnit.SECONDS)))
                    .containsExactlyInAnyOrder(302, 409);
            assertThat(invoices.findByContract_MaterialProcurementContractNoOrderByDueDateAscIdAsc(id).get(0)
                    .getOutstandingAmount()).isEqualByComparingTo("30");
        } finally {
            pool.shutdownNow();
        }
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
