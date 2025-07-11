package com.empsys.dao;




import com.empsys.entity.AttendanceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AttendanceRepository extends JpaRepository<AttendanceEntity, Long> {

    boolean existsByEmailAndDate(String email, LocalDate date);

    Optional<AttendanceEntity> findByEmailAndDate(String email, LocalDate date);

    List<AttendanceEntity> findAllByOrderByDateDesc(); 
    
    List<AttendanceEntity> findByEmail(String email);
// For HR to view
}

