package com.empsys.service;

import com.empsys.entity.TaskEntity;
import com.empsys.dao.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepo;

    public TaskEntity assignTask(TaskEntity task) {
        return taskRepo.save(task);
    }

    public List<TaskEntity> getTasksByEmployee(String email) {
        return taskRepo.findByEmployeeEmail(email);
    }

    public List<TaskEntity> getAllTasks() {
        return taskRepo.findAll();
    }
}
