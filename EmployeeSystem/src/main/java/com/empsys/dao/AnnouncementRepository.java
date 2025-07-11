package com.empsys.dao;

import com.empsys.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime; // ✅ ADD THIS IMPORT
import java.util.List;           // ✅ ALSO ADD THIS IF MISSING

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {

    // ✅ Custom method to fetch announcements created today
    List<Announcement> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);
    void deleteByCreatedAtBefore(LocalDateTime cutoffDate);
}