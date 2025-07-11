//package com.empsys.service;
//
//import com.empsys.entity.AttendanceEntity;
//import com.empsys.dao.AttendanceRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDate;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class AttendanceService {
//
//    @Autowired
//    private AttendanceRepository attendanceRepository;
//
//    // ✅ Clock In
//    public AttendanceEntity saveClockIn(AttendanceEntity attendance) {
//        attendance.setDate(LocalDate.now());
//        attendance.setStatus("Present");
//        return attendanceRepository.save(attendance);
//    }
//
//    // ✅ Clock Out
//    public AttendanceEntity saveClockOut(String email, String outTime, String totalHours) {
//        Optional<AttendanceEntity> optional = attendanceRepository.findByEmailAndDate(email, LocalDate.now());
//        if (optional.isPresent()) {
//            AttendanceEntity existing = optional.get();
//            existing.setOutTime(outTime);
//            existing.setTotalHours(totalHours);
//            return attendanceRepository.save(existing);
//        } else {
//            throw new RuntimeException("No Clock In found for this email today");
//        }
//    }
//
//    // ✅ Check if already clocked in
//    public boolean hasClockedIn(String email) {
//        return attendanceRepository.existsByEmailAndDate(email, LocalDate.now());
//    }
//
//    // ✅ Get today’s attendance
//    public Optional<AttendanceEntity> getTodayAttendance(String email) {
//        return attendanceRepository.findByEmailAndDate(email, LocalDate.now());
//    }
//
//    // ✅ Get all attendance (for HR)
//    public List<AttendanceEntity> getAllAttendance() {
//        return attendanceRepository.findAllByOrderByDateDesc();
//    }
//
//    // ✅ Get all records for one employee
//    public List<AttendanceEntity> getAttendanceByEmail(String email) {
//        return attendanceRepository.findByEmail(email);
//    }
//}

package com.empsys.service;

import com.empsys.dao.AttendanceRepository;
import com.empsys.entity.AttendanceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    // ✅ Clock In (only if not already clocked in today)
    public AttendanceEntity saveClockIn(AttendanceEntity attendance) {
        LocalDate today = LocalDate.now();

        // Prevent duplicate clock-in
        Optional<AttendanceEntity> existing = attendanceRepository.findByEmailAndDate(attendance.getEmail(), today);
        if (existing.isPresent()) {
            throw new RuntimeException("Already clocked in today.");
        }

        attendance.setDate(today);
        attendance.setStatus("Present");
        attendance.setInTime(attendance.getInTime()); // should be set from frontend or controller
        return attendanceRepository.save(attendance);
    }

    // ✅ Clock Out (only if clock-in exists and outTime not already set)
    public AttendanceEntity saveClockOut(String email, String outTime, String totalHours) {
        LocalDate today = LocalDate.now();
        Optional<AttendanceEntity> optional = attendanceRepository.findByEmailAndDate(email, today);

        if (optional.isPresent()) {
            AttendanceEntity existing = optional.get();

            if (existing.getOutTime() != null) {
                throw new RuntimeException("Already clocked out today.");
            }

            existing.setOutTime(outTime);
            existing.setTotalHours(totalHours);
            return attendanceRepository.save(existing);
        } else {
            throw new RuntimeException("No Clock-In record found for today.");
        }
    }

    // ✅ Check if clocked in
    public boolean hasClockedIn(String email) {
        return attendanceRepository.existsByEmailAndDate(email, LocalDate.now());
    }

    // ✅ Get today's record
    public Optional<AttendanceEntity> getTodayAttendance(String email) {
        return attendanceRepository.findByEmailAndDate(email, LocalDate.now());
    }

    // ✅ For HR: get all sorted
    public List<AttendanceEntity> getAllAttendance() {
        return attendanceRepository.findAllByOrderByDateDesc();
    }

    // ✅ Get all records for a user
    public List<AttendanceEntity> getAttendanceByEmail(String email) {
        return attendanceRepository.findByEmail(email);
    }

    // ✅ Check if clock-in and clock-out both done
    public boolean isAttendanceCompleted(String email) {
        Optional<AttendanceEntity> optional = attendanceRepository.findByEmailAndDate(email, LocalDate.now());
        return optional.isPresent() && optional.get().getOutTime() != null;
    }
}

