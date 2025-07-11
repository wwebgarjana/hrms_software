package com.empsys.controller;

import com.empsys.entity.ChatEntity;
import com.empsys.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/send")
    public ChatEntity sendMessage(@RequestBody ChatEntity message) {
        return chatService.saveMessage(message);
    }

    @GetMapping("/history/{sender}/{receiver}")
    public List<ChatEntity> getChatHistory(@PathVariable String sender, @PathVariable String receiver) {
        return chatService.getChatHistory(sender, receiver);
    }
    @GetMapping("/employee/{email}")
    public List<ChatEntity> getEmployeeMessages(@PathVariable String email) {
        return chatService.getEmployeeMessages(email); // includes personal + broadcast
    }
    @GetMapping("/hr/all")
    public List<ChatEntity> getAllMessagesForHR() {
        return chatService.getAllMessagesForHR("hr@company.com");
    }

}
