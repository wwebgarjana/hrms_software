package com.empsys.controller;

import com.empsys.dao.OtherClaimRepository;
import com.empsys.entity.OtherClaimEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequestMapping("/api/other-claims")
@CrossOrigin(origins = "http://localhost:3000")
public class OtherClaimController {

    @Autowired
    private OtherClaimRepository repo;

    // ✅ Submit a new claim
    @PostMapping
    public ResponseEntity<String> saveOtherClaim(
            @RequestParam("employeeId") String employeeId,
            @RequestParam("name") String name,
            @RequestParam("designation") String designation,
            @RequestParam("title") String title,
            @RequestParam("incidentDate") String incidentDate,
            @RequestParam("description") String description,
            @RequestParam("amount") String amount,
            @RequestParam("submittedOn") String submittedOn,
            @RequestParam("status") String status,
            @RequestParam(value = "approvedBy", required = false) String approvedBy,
            @RequestParam(value = "payoutDate", required = false) String payoutDate,
            @RequestParam(value = "proof", required = false) MultipartFile proof
    ) {
        try {
            OtherClaimEntity claim = new OtherClaimEntity();
            claim.setEmployeeId(employeeId);
            claim.setName(name);
            claim.setDesignation(designation);
            claim.setTitle(title);
            claim.setIncidentDate(incidentDate);
            claim.setDescription(description);
            claim.setAmount(amount);
            claim.setSubmittedOn(submittedOn);
            claim.setStatus(status);
            claim.setApprovedBy(approvedBy);
            claim.setPayoutDate(payoutDate);

            if (proof != null && !proof.isEmpty()) {
                claim.setProofFileName(proof.getOriginalFilename());
                claim.setProofFile(proof.getBytes());
            }

            repo.save(claim);
            return ResponseEntity.ok("✅ Other claim saved successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("❌ Failed to save other claim: " + e.getMessage());
        }
    }

    // ✅ Get all claims (HR Dashboard)
    @GetMapping
    public ResponseEntity<List<OtherClaimEntity>> getAllClaims() {
        return ResponseEntity.ok(repo.findAll());
    }

    // ✅ Download proof file
    @GetMapping("/proof/{id}")
    public ResponseEntity<byte[]> downloadProof(@PathVariable Long id) {
        Optional<OtherClaimEntity> opt = repo.findById(id);
        if (opt.isPresent() && opt.get().getProofFile() != null) {
            OtherClaimEntity c = opt.get();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDisposition(ContentDisposition.attachment()
                    .filename(c.getProofFileName()).build());
            return new ResponseEntity<>(c.getProofFile(), headers, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

    // ✅ Approve claim
    @PutMapping("/approve/{id}")
    public ResponseEntity<String> approveClaim(@PathVariable Long id) {
        Optional<OtherClaimEntity> opt = repo.findById(id);
        if (opt.isPresent()) {
            OtherClaimEntity claim = opt.get();
            claim.setStatus("Approved");
            claim.setApprovedBy("HR Manager");
            claim.setPayoutDate(java.time.LocalDate.now().toString());
            repo.save(claim);
            return ResponseEntity.ok("✅ Claim approved");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("❌ Claim not found");
    }

    // ✅ Reject claim
    @PutMapping("/reject/{id}")
    public ResponseEntity<String> rejectClaim(@PathVariable Long id) {
        Optional<OtherClaimEntity> opt = repo.findById(id);
        if (opt.isPresent()) {
            OtherClaimEntity claim = opt.get();
            claim.setStatus("Rejected");
            claim.setApprovedBy("HR Manager");
            claim.setPayoutDate("-");
            repo.save(claim);
            return ResponseEntity.ok("✅ Claim rejected");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("❌ Claim not found");
    }

    // ✅ Get claims by employeeId

    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<OtherClaimEntity>> getClaimsByEmployee(@PathVariable String employeeId) {
        System.out.println("👉 Fetching claims for: " + employeeId);  // ✅ Debug log
        List<OtherClaimEntity> claims = repo.findByEmployeeId(employeeId);
        System.out.println("👉 Found claims: " + claims.size());
        return ResponseEntity.ok(claims);
    }

    }