package com.empsys.service;


import com.empsys.entity.OnboardingEntity;

import java.util.Optional;
import java.util.List;

public interface OnboardingService {
    OnboardingEntity saveOnboarding(OnboardingEntity entity);

    Optional<OnboardingEntity> getByEmail(String email);

    Optional<OnboardingEntity> loginEmployee(String email, String password);

    List<OnboardingEntity> getAll();
}