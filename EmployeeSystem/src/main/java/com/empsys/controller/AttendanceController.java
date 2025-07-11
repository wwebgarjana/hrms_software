package com.empsys.controller;

import com.empsys.entity.AttendanceEntity;
import com.empsys.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    // ✅ Clock In
    @PostMapping("/clock-in")
    public AttendanceEntity clockIn(@RequestBody AttendanceEntity attendance) {
        return attendanceService.saveClockIn(attendance);
    }

    // ✅ Clock Out
    @PostMapping("/clock-out")
    public AttendanceEntity clockOut(@RequestBody Map<String, String> data) {
        String email = data.get("email");
        String outTime = data.get("outTime");
        String totalHours = data.get("totalHours");
        return attendanceService.saveClockOut(email, outTime, totalHours);
    }

    // ✅ Check clock in
    @GetMapping("/check-clock-in")
    public boolean checkClockIn(@RequestParam String email) {
        return attendanceService.hasClockedIn(email);
    }

    // ✅ Get today’s attendance
    @GetMapping("/today")
    public Optional<AttendanceEntity> getToday(@RequestParam String email) {
        return attendanceService.getTodayAttendance(email);
    }

    // ✅ HR: get all records
    @GetMapping("/all")
    public List<AttendanceEntity> all() {
        return attendanceService.getAllAttendance();
    }

    // ✅ EMPLOYEE: get attendance by email
    @GetMapping("/email/{email}")
    public List<AttendanceEntity> getAttendanceByEmail(@PathVariable String email) {
        return attendanceService.getAttendanceByEmail(email);
    }
}
