package com.empsys.controller;




import com.empsys.dao.OnboardingRepository;
import com.empsys.dto.LoginRequest;
import com.empsys.entity.OnboardingEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/onboarding")
@CrossOrigin(origins = "*")
public class OnboardingController {

    @Autowired
    private OnboardingRepository repository;

    // ✅ Save onboarding data (used during registration)
    @PostMapping("/save")
    public OnboardingEntity save(@RequestBody OnboardingEntity entity) {
        return repository.save(entity);
    }

    // ✅ Login with email, password, role, and active=true
    @PostMapping("/login")
    public Optional<OnboardingEntity> login(@RequestBody LoginRequest request) {
        return repository.findByEmailAndPasswordAndRoleAndActiveTrue(
                request.getEmail(),
                request.getPassword(),
                request.getRole()
        );
    }

    // ✅ Get all onboarded users
    @GetMapping("/all")
    public List<OnboardingEntity> getAll() {
        return repository.findAll();
    }

    // ✅ Get by email
    @GetMapping("/email/{email}")
    public Optional<OnboardingEntity> getByEmail(@PathVariable String email) {
        return repository.findByEmail(email);
    }
}