


//package com.empsys.dao;
//
//import com.empsys.entity.DocumentEntity;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface DocumentRepository extends JpaRepository<DocumentEntity, Long> {
//    
//    // ✅ Custom method to find documents by employee email
//    DocumentEntity findByEmail(String email);
//}

package com.empsys.dao;

import com.empsys.entity.DocumentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DocumentRepository extends JpaRepository<DocumentEntity, Long> {
    Optional<DocumentEntity> findByEmail(String email);
    
}



