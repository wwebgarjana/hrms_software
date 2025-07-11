//package com.empsys.entity;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "documents")
//public class DocumentEntity {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    
//    private String email;
//
//    // Stores file paths for offer letter and ID card
//    private String offerLetterUrl;
//    private String idCardUrl;
//
//    // Can hold large text like policy documents
//    @Lob
//    private String hrPolicies;
//
//    // --- Getters and Setters ---
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getOfferLetterUrl() {
//        return offerLetterUrl;
//    }
//
//    public void setOfferLetterUrl(String offerLetterUrl) {
//        this.offerLetterUrl = offerLetterUrl;
//    }
//
//    public String getIdCardUrl() {
//        return idCardUrl;
//    }
//
//    public void setIdCardUrl(String idCardUrl) {
//        this.idCardUrl = idCardUrl;
//    }
//
//    public String getHrPolicies() {
//        return hrPolicies;
//    }
//
//    public void setHrPolicies(String hrPolicies) {
//        this.hrPolicies = hrPolicies;
//    }
//}


package com.empsys.entity;

import javax.persistence.*;

@Entity
@Table(name = "documents")
public class DocumentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String offerLetterFilename;
    private String idCardFilename;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] offerLetterUrl;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] idCardUrl;

    @Lob
    private String hrPolicies;

    // --- Getters and Setters ---
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public byte[] getOfferLetterUrl() {
        return offerLetterUrl;
    }

    public void setOfferLetterUrl(byte[] offerLetterUrl) {
        this.offerLetterUrl = offerLetterUrl;
    }

    public byte[] getIdCardUrl() {
        return idCardUrl;
    }

    public void setIdCardUrl(byte[] idCardUrl) {
        this.idCardUrl = idCardUrl;
    }

    public String getHrPolicies() {
        return hrPolicies;
    }

    public void setHrPolicies(String hrPolicies) {
        this.hrPolicies = hrPolicies;
    }

    public String getOfferLetterFilename() {
        return offerLetterFilename;
    }

    public void setOfferLetterFilename(String offerLetterFilename) {
        this.offerLetterFilename = offerLetterFilename;
    }

    public String getIdCardFilename() {
        return idCardFilename;
    }

    public void setIdCardFilename(String idCardFilename) {
        this.idCardFilename = idCardFilename;
    }
}
