package com.empsys.controller;

import com.empsys.entity.LeaveEntity;
import com.empsys.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/leave")
@CrossOrigin(origins = "http://localhost:3000")
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    // ✅ Apply leave
    @PostMapping("/apply")
    public LeaveEntity applyLeave(@RequestBody LeaveEntity leave) {
        return leaveService.applyLeave(leave); // Use service correctly
    }

    // ✅ Get all leave requests (HR)
    @GetMapping("/all")
    public List<LeaveEntity> getAllLeaves() {
        return leaveService.getAllLeaves();
    }

    // ✅ Get user leave requests by email
    @GetMapping("/user")
    public List<LeaveEntity> getLeavesByEmail(@RequestParam String email) {
        return leaveService.getLeavesByEmail(email);
    }

    // ✅ HR approves or rejects
    @PutMapping("/status/{id}")
    public LeaveEntity updateLeaveStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body
    ) {
        String status = body.get("status");
        String msg = body.getOrDefault("hrMessage", "");
        return leaveService.updateStatus(id, status, msg);
    }
}
