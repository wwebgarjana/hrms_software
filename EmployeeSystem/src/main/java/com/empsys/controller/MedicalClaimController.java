package com.empsys.controller;

import com.empsys.dao.MedicalClaimRepository;
import com.empsys.entity.MedicalClaimEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/medical-claims")
@CrossOrigin(origins = "http://localhost:3000")
public class MedicalClaimController {

    @Autowired
    private MedicalClaimRepository claimRepo;

    // ✅ 1. Save claim
    @PostMapping
    public ResponseEntity<String> saveClaim(
            @RequestParam("employeeId") String employeeId,
            @RequestParam("name") String name,
            @RequestParam("department") String department,
            @RequestParam("medicalType") String medicalType,
            @RequestParam("treatmentDate") String treatmentDate,
            @RequestParam("claimAmount") String claimAmount,
            @RequestParam("doctorName") String doctorName,
            @RequestParam(value = "remarks", required = false) String remarks,
            @RequestParam(value = "policyNumber", required = false) String policyNumber,
            @RequestParam(value = "uploadedFile", required = false) MultipartFile uploadedFile,
            @RequestParam("submittedOn") String submittedOn,
            @RequestParam("status") String status,
            @RequestParam(value = "approvedOn", required = false) String approvedOn,
            @RequestParam(value = "approvedBy", required = false) String approvedBy
    ) {
        try {
            MedicalClaimEntity claim = new MedicalClaimEntity();
            claim.setEmployeeId(employeeId);
            claim.setName(name);
            claim.setDepartment(department);
            claim.setMedicalType(medicalType);
            claim.setTreatmentDate(treatmentDate);
            claim.setClaimAmount(claimAmount);
            claim.setDoctorName(doctorName);
            claim.setRemarks(remarks);
            claim.setPolicyNumber(policyNumber);
            claim.setSubmittedOn(submittedOn);
            claim.setStatus(status);
            claim.setApprovedOn(approvedOn);
            claim.setApprovedBy(approvedBy);

            if (uploadedFile != null && !uploadedFile.isEmpty()) {
                claim.setUploadedFile(uploadedFile.getOriginalFilename());
                claim.setFileData(uploadedFile.getBytes());
            }

            claimRepo.save(claim);
            return ResponseEntity.ok("✅ Medical claim saved successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("❌ Failed to save claim: " + e.getMessage());
        }
    }

    // ✅ 2. Get all claims
    @GetMapping
    public ResponseEntity<List<MedicalClaimEntity>> getAllClaims() {
        return ResponseEntity.ok(claimRepo.findAll());
    }

    // ✅ 3. Update status
    @PutMapping("/{id}/status")
    public ResponseEntity<String> updateStatus(
            @PathVariable Long id,
            @RequestBody MedicalClaimEntity updateRequest
    ) {
        Optional<MedicalClaimEntity> optionalClaim = claimRepo.findById(id);
        if (optionalClaim.isPresent()) {
            MedicalClaimEntity claim = optionalClaim.get();
            claim.setStatus(updateRequest.getStatus());
            claim.setApprovedBy(updateRequest.getApprovedBy());
            claim.setApprovedOn(updateRequest.getApprovedOn());

            claimRepo.save(claim);
            return ResponseEntity.ok("✅ Status updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("❌ Claim not found");
        }
    }

    // ✅ 4. Download file - correct mapping
    @GetMapping("/file/{claimId}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable Long claimId) {
        Optional<MedicalClaimEntity> optionalClaim = claimRepo.findById(claimId);
        if (optionalClaim.isPresent() && optionalClaim.get().getFileData() != null) {
            byte[] fileData = optionalClaim.get().getFileData();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDisposition(ContentDisposition.attachment()
                    .filename(optionalClaim.get().getUploadedFile())
                    .build());

            return new ResponseEntity<>(fileData, headers, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }
 // ✅ 5. Get claims by employeeId
    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<MedicalClaimEntity>> getClaimsByEmployeeId(@PathVariable String employeeId) {
        List<MedicalClaimEntity> claims = claimRepo.findByEmployeeId(employeeId);
        return ResponseEntity.ok(claims);
    }

    
    
}