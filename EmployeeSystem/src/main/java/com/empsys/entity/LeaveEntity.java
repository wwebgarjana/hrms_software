package com.empsys.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "leave_requests")
public class LeaveEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String leaveType;

    private LocalDate fromDate;
    private LocalDate toDate;

    private String reason;

    private String status;     // "Pending", "Approved", "Rejected"
    private String hrMessage;  // Optional message from HR

    // Constructors
    public LeaveEntity() {
    }

    public LeaveEntity(String email, String leaveType, LocalDate fromDate, LocalDate toDate, String reason, String status, String hrMessage) {
        this.email = email;
        this.leaveType = leaveType;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.reason = reason;
        this.status = status;
        this.hrMessage = hrMessage;
    }

    // Getters & Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLeaveType() {
        return leaveType;
    }

    public void setLeaveType(String leaveType) {
        this.leaveType = leaveType;
    }

    public LocalDate getFromDate() {
        return fromDate;
    }

    public void setFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
    }

    public LocalDate getToDate() {
        return toDate;
    }

    public void setToDate(LocalDate toDate) {
        this.toDate = toDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getHrMessage() {
        return hrMessage;
    }

    public void setHrMessage(String hrMessage) {
        this.hrMessage = hrMessage;
    }
}
