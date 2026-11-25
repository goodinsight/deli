package com.deligence.deli;

import com.deligence.deli.domain.CooperatorClient;
import com.deligence.deli.domain.CooperatorSupplier;
import com.deligence.deli.repository.CooperatorSupplierRepository;
import com.deligence.deli.repository.PartnerLinkRepository;
import org.springframework.transaction.annotation.Propagation;
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

    @Autowired CooperatorSupplierRepository suppliers;
    @Autowired PartnerLinkRepository partnerLinks;

    @Test
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    void adminConfirmsDistinctPartyRecordsAndCanUndoTheLink() throws Exception {
        var client = clients.save(CooperatorClient.builder().clientName("Directory Example").build());
        var second = clients.save(CooperatorClient.builder().clientName("Directory Example").build());
        var supplier = suppliers.save(CooperatorSupplier.builder().supplierName("Directory Example").build());
        var admin = session("ADMIN", "reviewer");
        try {
            mvc.perform(get("/partnerDirectory").session(session("CLIENT"))).andExpect(forwardedUrl("/error/deniedpage"));
            mvc.perform(post("/partnerDirectory/link").session(session("SUPPLIER"))).andExpect(forwardedUrl("/error/deniedpage"));
            mvc.perform(get("/partnerDirectory").session(admin)).andExpect(status().isOk())
                    .andExpect(content().string(containsString("연결된 거래처가 없습니다.")));
            for (var candidate : new CooperatorClient[]{client, client, second}) {
                mvc.perform(post("/partnerDirectory/link").session(admin).param("clientNo", String.valueOf(candidate.getClientNo()))
                        .param("supplierNo", supplier.getSupplierNo().toString())).andExpect(redirectedUrl("/partnerDirectory"));
            }
            var links = partnerLinks.directory();
            assertThat(links).hasSize(1);
            var link = links.get(0);
            assertThat(link.getClient().getClientNo()).isEqualTo(client.getClientNo());
            assertThat(link.getConfirmedBy()).isEqualTo("reviewer");
            mvc.perform(get("/partnerDirectory").session(admin)).andExpect(status().isOk())
                    .andExpect(content().string(containsString("/cooperatorSupplier/read?supplierNo=" + supplier.getSupplierNo())));
            mvc.perform(post("/partnerDirectory/unlink").session(admin).param("linkId", link.getId().toString()))
                    .andExpect(redirectedUrl("/partnerDirectory"));
            assertThat(partnerLinks.directory()).isEmpty();
            assertThat(clients.findUnlinked()).extracting(CooperatorClient::getClientNo).contains(client.getClientNo(), second.getClientNo());
            assertThat(suppliers.findUnlinked()).extracting(CooperatorSupplier::getSupplierNo).contains(supplier.getSupplierNo());
        } finally {
            partnerLinks.directory().stream().filter(link -> link.getSupplier().getSupplierNo().equals(supplier.getSupplierNo()))
                    .forEach(partnerLinks::delete);
            clients.delete(client);
            clients.delete(second);
            suppliers.delete(supplier);
        }
    }

    @Test
    void billingRequiresConfirmationAndRecordsPartialReceiptsOnce() throws Exception {
        var contract = contracts.save(com.deligence.deli.domain.ProductContract.builder()
                .productContractCode("Billing-test").productContractState("자재검토중").build());
        String url = "/productContract/" + contract.getProductContractNo() + "/billing";
        var staff = session("CLIENT");
        String key = java.util.UUID.randomUUID().toString();
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("청구 전")));
        mvc.perform(post(url + "/invoice").session(session("MATERIAL")).param("amount", "1100000"))
                .andExpect(forwardedUrl("/error/deniedpage"));
        mvc.perform(post(url + "/receipts").session(staff).param("requestId", key).param("amount", "1"))
                .andExpect(status().isConflict());
        for (int retry = 0; retry < 2; retry++) {
            mvc.perform(post(url + "/invoice").session(staff).param("amount", "1100000.00")).andExpect(redirectedUrl(url));
            mvc.perform(post(url + "/receipts").session(staff).param("requestId", key).param("amount", "400000.00"))
                    .andExpect(redirectedUrl(url));
        }
        mvc.perform(get(url).session(staff)).andExpect(status().isOk())
                .andExpect(content().string(containsString("미수잔액 700000.00원")));
        mvc.perform(post(url + "/receipts").session(staff).param("requestId", key).param("amount", "100"))
                .andExpect(status().isConflict());
        String last = java.util.UUID.randomUUID().toString();
        mvc.perform(post(url + "/receipts").session(staff).param("requestId", last).param("amount", "700001"))
                .andExpect(status().isConflict());
        mvc.perform(post(url + "/receipts").session(staff).param("requestId", last).param("amount", "700000.00"))
                .andExpect(redirectedUrl(url));
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("미수잔액 0.00원")))
                .andExpect(content().string(not(containsString("수금 등록"))));
    }

    @Autowired com.deligence.deli.repository.ContractLedgerRepository ledger;

    @Test
    void reversingReceiptRestoresBalanceOnceAndKeepsAuditHistory() throws Exception {
        var contract = contracts.save(com.deligence.deli.domain.ProductContract.builder().productContractCode("reverse").build());
        int id = contract.getProductContractNo();
        String url = "/productContract/" + id + "/billing";
        var staff = session("CLIENT", "collector");
        mvc.perform(post(url + "/invoice").session(staff).param("amount", "1100000.00")).andExpect(redirectedUrl(url));
        mvc.perform(post(url + "/receipts").session(staff).param("requestId", java.util.UUID.randomUUID().toString())
                .param("amount", "400000.00")).andExpect(redirectedUrl(url));
        var receipt = ledger.findByContract_ProductContractNoOrderByIdAsc(id).get(1);
        String reverse = url + "/receipts/" + receipt.getId() + "/reverse";
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("미수잔액 700000.00원")));
        mvc.perform(post(reverse).session(staff).param("reason", " ")).andExpect(status().isBadRequest());
        mvc.perform(post(reverse).session(session("MATERIAL")).param("reason", "오입력")).andExpect(forwardedUrl("/error/deniedpage"));
        for (int retry = 0; retry < 2; retry++) {
            mvc.perform(post(reverse).session(session("ADMIN", "reviewer")).param("reason", "금액 오입력")).andExpect(redirectedUrl(url));
        }
        var entries = ledger.findByContract_ProductContractNoOrderByIdAsc(id);
        assertThat(entries).hasSize(3);
        assertThat(entries.get(2).getReversedReceipt().getId()).isEqualTo(receipt.getId());
        assertThat(entries.get(2).getRecordedBy()).isEqualTo("reviewer");
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("미수잔액 1100000.00원")))
                .andExpect(content().string(containsString("금액 오입력")));
        mvc.perform(post(url + "/receipts").session(staff).param("requestId", java.util.UUID.randomUUID().toString())
                .param("amount", "300000.00")).andExpect(redirectedUrl(url));
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("미수잔액 800000.00원")));
    }

    @Autowired com.deligence.deli.repository.ProductionPlanningRepository productionPlans;

    @Test
    void unpaidInvoiceCancellationIsAuditedAndIdempotent() throws Exception {
        int id = contracts.save(com.deligence.deli.domain.ProductContract.builder()
                .productContractState("자재검토중").build()).getProductContractNo();
        String url = "/productContract/" + id + "/billing";
        var staff = session("CLIENT", "collector");
        mvc.perform(post(url + "/invoice").session(staff).param("amount", "1100000.00")).andExpect(redirectedUrl(url));
        for (int i = 0; i < 2; i++) {
            mvc.perform(post(url + "/invoice/cancel").session(staff).param("reason", "요청 철회")).andExpect(redirectedUrl(url));
        }
        var entries = ledger.findByContract_ProductContractNoOrderByIdAsc(id);
        assertThat(entries).hasSize(2);
        assertThat(entries.get(1).getRecordedBy()).isEqualTo("collector");
        assertThat(entries.get(1).getReversalReason()).isEqualTo("요청 철회");
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("미수잔액 0.00원")))
                .andExpect(content().string(containsString("청구 취소 완료")));
        var plan = productionPlans.save(com.deligence.deli.domain.ProductionPlanning.builder()
                .productContract(contracts.getReferenceById(id)).productionState("자재조달단계").build());
        mvc.perform(post("/productContract/remove").session(staff).param("productContractNo", String.valueOf(id)))
                .andExpect(status().isConflict());
        planning.remove(plan.getProductionPlanNo());
        mvc.perform(post("/productContract/remove").session(staff).param("productContractNo", String.valueOf(id)))
                .andExpect(redirectedUrl("/productContract/list"));
    }

    @Test
    void partialReceiptHoldsTerminationUntilReconciledAndInvoiceCancelled() throws Exception {
        int id = contracts.save(com.deligence.deli.domain.ProductContract.builder()
                .productContractState("자재검토중").build()).getProductContractNo();
        String url = "/productContract/" + id + "/billing";
        var staff = session("ADMIN", "reviewer");
        mvc.perform(post(url + "/invoice").session(staff).param("amount", "1100000.00")).andExpect(redirectedUrl(url));
        mvc.perform(post(url + "/receipts").session(staff).param("requestId", java.util.UUID.randomUUID().toString())
                .param("amount", "400000.00")).andExpect(redirectedUrl(url));
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("실수금액 400000.00원 · 미수잔액 700000.00원")));
        mvc.perform(post("/productContract/remove").session(staff).param("productContractNo", String.valueOf(id)))
                .andExpect(status().isConflict());
        mvc.perform(post(url + "/invoice/cancel").session(staff).param("reason", "해지").param("reconciled","true"))
                .andExpect(status().isConflict());
        var receipt = ledger.findByContract_ProductContractNoOrderByIdAsc(id).get(1);
        String receiptUrl = url + "/receipts/" + receipt.getId();
        for (int i = 0; i < 2; i++) {
            mvc.perform(post(receiptUrl + "/settle").session(staff).param("reason", "환불 이체 확인 A-102"))
                    .andExpect(redirectedUrl(url));
        }
        mvc.perform(post(receiptUrl + "/reverse").session(staff).param("reason","정정")).andExpect(status().isConflict());
        mvc.perform(post(url + "/invoice/cancel").session(staff).param("reason","해지")).andExpect(status().isConflict());
        mvc.perform(post(url + "/invoice/cancel").session(staff).param("reason","해지").param("reconciled","true"))
                .andExpect(redirectedUrl(url));
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("미수잔액 0.00원")))
                .andExpect(content().string(containsString("환불 이체 확인 A-102")));
        assertThat(ledger.findByContract_ProductContractNoOrderByIdAsc(id)).hasSize(4);
        mvc.perform(post("/productContract/remove").session(staff).param("productContractNo", String.valueOf(id)))
                .andExpect(redirectedUrl("/productContract/list"));
    }

    @Test
    void customerTotalsFollowContractLedgerAndKoreanDueDates() throws Exception {
        var client = clients.save(CooperatorClient.builder().clientName("보고서 고객").build());
        var staff = session("CLIENT");
        var today = LocalDate.now(java.time.ZoneId.of("Asia/Seoul"));
        String report = "/productContract/receivables";
        int late = contracts.save(com.deligence.deli.domain.ProductContract.builder().cooperatorClient(client).build()).getProductContractNo();
        int future = contracts.save(com.deligence.deli.domain.ProductContract.builder().cooperatorClient(client).build()).getProductContractNo();
        String lateUrl = "/productContract/" + late + "/billing";
        String futureUrl = "/productContract/" + future + "/billing";
        mvc.perform(post(lateUrl + "/invoice").session(staff).param("amount", "1100000.00")).andExpect(redirectedUrl(lateUrl));
        mvc.perform(get(report).session(staff)).andExpect(content().string(containsString("미지정")));
        mvc.perform(post(lateUrl + "/due-date").session(staff).param("dueDate", today.minusDays(1).toString())).andExpect(redirectedUrl(lateUrl));
        mvc.perform(post(futureUrl + "/invoice").session(staff).param("amount", "300000.00")
                .param("dueDate", today.plusDays(1).toString())).andExpect(redirectedUrl(futureUrl));
        mvc.perform(post(lateUrl + "/receipts").session(staff).param("amount", "400000.00")
                .param("requestId", java.util.UUID.randomUUID().toString())).andExpect(redirectedUrl(lateUrl));
        mvc.perform(get(report).session(staff)).andExpect(content().string(containsString("총 미수 1000000.00원 · 연체 700000.00원")));
        var receipt = ledger.findByContract_ProductContractNoOrderByIdAsc(late).get(1);
        mvc.perform(post(lateUrl + "/receipts/" + receipt.getId() + "/reverse").session(staff).param("reason","오입력"))
                .andExpect(redirectedUrl(lateUrl));
        mvc.perform(post(futureUrl + "/invoice/cancel").session(staff).param("reason","취소")).andExpect(redirectedUrl(futureUrl));
        mvc.perform(get(report).session(staff)).andExpect(content().string(containsString("총 미수 1100000.00원 · 연체 1100000.00원")));
    }

    @Test
    void uploadedDepositsStayPendingUntilMatchedAndCannotBeCountedTwice() throws Exception {
        String url = "/productContract/receivables/deposits";
        var staff = session("CLIENT");
        int contract = contracts.save(com.deligence.deli.domain.ProductContract.builder().build()).getProductContractNo();
        String billing = "/productContract/" + contract + "/billing";
        mvc.perform(post(billing + "/invoice").session(staff).param("amount", "700000.00")).andExpect(redirectedUrl(billing));
        String csv = "거래번호,입금일,입금액,입금자\nBANK-001,2026-11-25,400000,입금인\n";
        var file = new org.springframework.mock.web.MockMultipartFile("file", "bank.csv", "text/csv",
                csv.getBytes(java.nio.charset.StandardCharsets.UTF_8));
        for (int i = 0; i < 2; i++) {
            mvc.perform(multipart(url).file(file).session(staff)).andExpect(redirectedUrl(url))
                    .andExpect(flash().attribute("message", "새 입금 " + (1-i) + "건을 가져왔습니다."));
        }
        mvc.perform(get(url).session(staff)).andExpect(content().string(containsString("BANK-001")));
        assertThat(ledger.findByContract_ProductContractNoOrderByIdAsc(contract)).hasSize(1);
        for (int i = 0; i < 2; i++) {
            mvc.perform(post(url + "/match").session(staff).param("reference","BANK-001").param("contractNo",String.valueOf(contract)))
                    .andExpect(redirectedUrl(url));
        }
        assertThat(ledger.findByContract_ProductContractNoOrderByIdAsc(contract)).hasSize(2);
        mvc.perform(get(billing).session(staff)).andExpect(content().string(containsString("미수잔액 300000.00원")))
                .andExpect(content().string(containsString("입금 거래번호 BANK-001")));
        mvc.perform(post(url + "/match").session(staff).param("reference","BANK-001").param("contractNo","-1"))
                .andExpect(status().isConflict());
        mvc.perform(get(url).session(session("MATERIAL"))).andExpect(forwardedUrl("/error/deniedpage"));
    }

    @Autowired com.deligence.deli.repository.BankDepositRepository importedDeposits;

    @Test
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    void conflictingCsvRollsBackEarlierRowsInSameFile() throws Exception {
        var csv = "거래번호,입금일,입금액,입금자\nROLLBACK-1,2026-11-25,10,회사\nROLLBACK-1,2026-11-25,20,회사";
        var file = new org.springframework.mock.web.MockMultipartFile("file", "conflict.csv", "text/csv",
                csv.getBytes(java.nio.charset.StandardCharsets.UTF_8));
        mvc.perform(multipart("/productContract/receivables/deposits").file(file).session(session("ADMIN")))
                .andExpect(status().isConflict());
        assertThat(importedDeposits.findById("ROLLBACK-1")).isEmpty();
    }

    @Test
    void materialRoleCannotReadOrRegisterConsultations() throws Exception {
        mvc.perform(get("/CooperatorClient/read").session(session("MATERIAL"))).andExpect(forwardedUrl("/error/deniedpage"));
        mvc.perform(post("/CooperatorClient/consultations").session(session("MATERIAL"))).andExpect(forwardedUrl("/error/deniedpage"));
    }
}
