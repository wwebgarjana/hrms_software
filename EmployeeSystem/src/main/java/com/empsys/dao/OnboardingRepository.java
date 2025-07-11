package com.empsys.dao;


import com.empsys.entity.OnboardingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OnboardingRepository extends JpaRepository<OnboardingEntity, Long> {
    Optional<OnboardingEntity> findByEmail(String email);
    Optional<OnboardingEntity> findByEmailAndPasswordAndActiveTrue(String email, String password);
    Optional<OnboardingEntity> findByEmailAndPasswordAndRoleAndActiveTrue(String email, String password, String role);

}