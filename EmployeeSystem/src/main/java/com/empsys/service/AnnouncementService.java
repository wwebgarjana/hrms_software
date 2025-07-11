package com.empsys.service;

import com.empsys.dao.AnnouncementRepository;
import com.empsys.entity.Announcement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AnnouncementService {

    @Autowired
    private AnnouncementRepository repository;

    // ✅ Save announcement with or without file
    public Announcement saveAnnouncement(Announcement announcement) {
        return repository.save(announcement);
    }

    // ✅ Get all announcements
    public List<Announcement> getAllAnnouncements() {
        return repository.findAll();
    }

    // ✅ Get specific announcement by ID
    public Announcement getAnnouncementById(Long id) {
        return repository.findById(id).orElse(null);
    }
    public List<Announcement> getAnnouncementsBetween(LocalDateTime start, LocalDateTime end) {
        return repository.findByCreatedAtBetween(start, end);
    }
}