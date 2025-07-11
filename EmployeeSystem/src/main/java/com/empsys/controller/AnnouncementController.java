package com.empsys.controller;

import com.empsys.entity.Announcement;
import com.empsys.service.AnnouncementService;
import com.empsys.dao.AnnouncementRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;

@RestController
@RequestMapping("/api/announcements")
@CrossOrigin(origins = "*")
public class AnnouncementController {

    @Autowired
    private AnnouncementService service;

    @Autowired
    private AnnouncementRepository repository;

    // ✅ Add new announcement with optional file
    @PostMapping("/add")
    public ResponseEntity<Announcement> addAnnouncement(
            @RequestParam String title,
            @RequestParam String content,
            @RequestParam String department,
            @RequestParam String location,
            @RequestParam(required = false) MultipartFile attachment) {

        try {
            Announcement announcement = new Announcement();
            announcement.setTitle(title);
            announcement.setContent(content);
            announcement.setDepartment(department);
            announcement.setLocation(location);

            if (attachment != null && !attachment.isEmpty()) {
                announcement.setAttachmentData(attachment.getBytes());
                announcement.setAttachmentDatafilename(attachment.getOriginalFilename());
            }

            Announcement saved = service.saveAnnouncement(announcement);
            return ResponseEntity.ok(saved);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // ✅ Get all announcements
    @GetMapping("/all")
    public List<Announcement> getAll() {
        return service.getAllAnnouncements();
    }

    // ✅ Download attachment by announcement ID
    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable Long id) {
        Announcement announcement = service.getAnnouncementById(id);
        if (announcement == null || announcement.getAttachmentData() == null) {
            return ResponseEntity.notFound().build();
        }

        String filename = announcement.getAttachmentDatafilename() != null
                ? announcement.getAttachmentDatafilename()
                : "attachment_" + id;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDisposition(ContentDisposition.attachment().filename(filename).build());

        return new ResponseEntity<>(announcement.getAttachmentData(), headers, HttpStatus.OK);
    }

    // ✅ GET today's announcements (used in dashboard)
    @GetMapping("/dashboard/announcements/today")
    public List<Map<String, Object>> getTodaysAnnouncements() {
        LocalDateTime start = LocalDate.now().atStartOfDay();
        LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);

        List<Announcement> announcements = repository.findByCreatedAtBetween(start, end);

        List<Map<String, Object>> response = new ArrayList<>();
        for (Announcement a : announcements) {
            Map<String, Object> map = new HashMap<>();
            map.put("id", a.getId());
            map.put("title", a.getTitle());
            map.put("content", a.getContent());
            map.put("department", a.getDepartment());
            map.put("location", a.getLocation());
            map.put("attachmentFilename", a.getAttachmentDatafilename());
            response.add(map);
        }

        return response;
    }

    // ✅ GET static celebrations for today (dummy)

    @GetMapping("/api/celebrations/today")
    public List<Map<String, String>> getCelebrationsToday() {
        List<Map<String, String>> celebrations = new ArrayList<>();

        Map<String, String> birthday = Map.of(
            "name", "Pooja Lakhangave",
            "type", "Birthday",
            "date", "2025-07-09"
        );

        Map<String, String> anniversary = Map.of(
            "name", "Rohan Deshmukh",
            "type", "Work Anniversary",
            "date", "2025-07-11"
        );

        celebrations.add(birthday);
        celebrations.add(anniversary);

        return celebrations;
    }
}