package com.empsys.controller;

import com.empsys.entity.PayslipEntity;
import com.empsys.service.PayslipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payroll")
@CrossOrigin(origins = "http://localhost:3000") // React default port
public class PayslipController {

    @Autowired
    private PayslipService payslipService;

    @PostMapping("/payslip")
    public PayslipEntity generatePayslip(@RequestBody PayslipEntity payslip) {
        return payslipService.generatePayslip(payslip);
    }

    @GetMapping("/payslip/{email}")
    public List<PayslipEntity> getPayslips(@PathVariable String email) {
        return payslipService.getPayslipsByEmail(email);
    }
}
