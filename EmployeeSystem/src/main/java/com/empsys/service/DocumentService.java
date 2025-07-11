//
//
//
//package com.empsys.service;
//
//import com.empsys.entity.DocumentEntity;
//import com.empsys.dao.DocumentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class DocumentService {
//
//    @Autowired
//    private DocumentRepository documentRepository;
//
//    public DocumentEntity saveDocument(DocumentEntity documentEntity) {
//        return documentRepository.save(documentEntity);
//    }
//}


package com.empsys.service;

import com.empsys.entity.DocumentEntity;
import com.empsys.dao.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentService {

    private final DocumentRepository documentRepository;

    @Autowired
    public DocumentService(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    public DocumentEntity saveDocument(DocumentEntity document) {
        return documentRepository.save(document);
    }

    public DocumentEntity getDocumentByEmail(String email) {
        return documentRepository.findByEmail(email).orElse(null);
    }
}

