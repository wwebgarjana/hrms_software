package com.empsys.service;

import com.empsys.entity.ChatEntity;
import com.empsys.dao.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;

    // Save new message
    public ChatEntity saveMessage(ChatEntity message) {
        return chatRepository.save(message);
    }

    // 🔁 Get full chat history between HR and employee (both directions)
    public List<ChatEntity> getChatHistory(String sender, String receiver) {
        return chatRepository.findChatBetween(sender, receiver);
    }

    // 📥 Get all messages relevant to a specific employee
    public List<ChatEntity> getEmployeeMessages(String email) {
        return chatRepository.findMessagesForEmployee(email);
    }
 // ✅ NEW: Get all messages involving HR
    public List<ChatEntity> getAllMessagesForHR(String hrEmail) {
        return chatRepository.findAllMessagesForHR(hrEmail);
    }

}
