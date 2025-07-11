
//package com.empsys.controller;
//
//import com.empsys.entity.DocumentEntity;
//import com.empsys.service.DocumentService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//	@RestController
//	@RequestMapping("/api/docs")
//	@CrossOrigin(origins = "*")
//	public class DocumentController {
//	
//	    @Autowired
//	    private DocumentService documentService;
//	
//	    @PostMapping("/save")
//	    public ResponseEntity<DocumentEntity> saveDocument(@RequestBody DocumentEntity documentEntity) {
//	        DocumentEntity saved = documentService.saveDocument(documentEntity);
//	        return ResponseEntity.ok(saved);
//	        
//	     // ✅ Employee fetches their documents by email
//	        @GetMapping("/employee")
//	        public ResponseEntity<?> getByEmail(@RequestParam String email) {
//	            Optional<DocumentEntity> docOpt = documentService.getDocumentsByEmail(email);
//	            if (docOpt.isPresent()) {
//	                return ResponseEntity.ok(docOpt.get());
//	            } else {
//	                return ResponseEntity.notFound().build();
//	            }
//	    }
//	}



package com.empsys.controller;

import com.empsys.entity.DocumentEntity;
import com.empsys.service.DocumentService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/docs")
@CrossOrigin(origins = "http://localhost:3000")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    // ✅ Upload documents
    @PostMapping("/upload")
    public ResponseEntity<DocumentEntity> uploadDocument(
            @RequestParam("email") String email,
            @RequestParam("offerLetter") MultipartFile offerLetter,
            @RequestParam("idCard") MultipartFile idCard,
            @RequestParam("hrPolicies") String hrPolicies) {

        try {
            DocumentEntity doc = new DocumentEntity();
            doc.setEmail(email);
            doc.setOfferLetterUrl(offerLetter.getBytes());
            doc.setOfferLetterFilename(offerLetter.getOriginalFilename());
            doc.setIdCardUrl(idCard.getBytes());
            doc.setIdCardFilename(idCard.getOriginalFilename());
            doc.setHrPolicies(hrPolicies);

            DocumentEntity saved = documentService.saveDocument(doc);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    // ✅ Fetch document metadata for employee view
    @GetMapping("/employee")
    public ResponseEntity<?> getDocumentByEmail(@RequestParam String email) {
        DocumentEntity doc = documentService.getDocumentByEmail(email);
        if (doc != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("email", doc.getEmail());
            response.put("hrPolicies", doc.getHrPolicies());
            response.put("offerLetterAvailable", doc.getOfferLetterUrl() != null);
            response.put("idCardAvailable", doc.getIdCardUrl() != null);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ Download offer letter with original filename
    @GetMapping("/download/offer-letter")
    public ResponseEntity<byte[]> downloadOfferLetter(@RequestParam String email) {
        DocumentEntity doc = documentService.getDocumentByEmail(email);
        if (doc != null && doc.getOfferLetterUrl() != null) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\"" + doc.getOfferLetterFilename() + "\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(doc.getOfferLetterUrl());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ Download ID card with original filename
    @GetMapping("/download/id-card")
    public ResponseEntity<byte[]> downloadIdCard(@RequestParam String email) {
        DocumentEntity doc = documentService.getDocumentByEmail(email);
        if (doc != null && doc.getIdCardUrl() != null) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\"" + doc.getIdCardFilename() + "\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(doc.getIdCardUrl());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
