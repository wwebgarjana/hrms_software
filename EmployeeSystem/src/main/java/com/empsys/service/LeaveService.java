package com.empsys.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empsys.dao.LeaveRepository;
import com.empsys.entity.LeaveEntity;

@Service
public class LeaveService {
    @Autowired
    private LeaveRepository repo;

    public LeaveEntity applyLeave(LeaveEntity leave) {
        leave.setStatus("Pending");
        return repo.save(leave);
    }

    public List<LeaveEntity> getAllLeaves() {
        return repo.findAll();
    }

    public List<LeaveEntity> getLeavesByEmail(String email) {
        return repo.findByEmail(email);
    }

    public LeaveEntity updateStatus(Long id, String status, String hrMessage) {
        LeaveEntity leave = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Leave not found"));
        leave.setStatus(status);
        leave.setHrMessage(hrMessage);
        return repo.save(leave);
    }
}
