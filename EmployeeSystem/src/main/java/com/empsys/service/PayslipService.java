package com.empsys.service;

import com.empsys.entity.PayslipEntity;
import com.empsys.dao.PayslipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;

@Service
public class PayslipService {

    @Autowired
    private PayslipRepository payslipRepository;

    public PayslipEntity generatePayslip(PayslipEntity payslip) {
        // Calculate net salary
        int paidDays = payslip.getPresentDays() + payslip.getSickLeave() + payslip.getCasualLeave();
        double perDaySalary = payslip.getBasicSalary() / payslip.getTotalWorkingDays();
        double netSalary = perDaySalary * paidDays;

        // Round to 2 decimal places
        DecimalFormat df = new DecimalFormat("#.##");
        netSalary = Double.parseDouble(df.format(netSalary));

        payslip.setNetSalary(netSalary);

        return payslipRepository.save(payslip);
    }

    public java.util.List<PayslipEntity> getPayslipsByEmail(String email) {
        return payslipRepository.findByEmail(email);
    }
}
