package com.empsys.controller;

import com.empsys.dao.TicketRepository;
import com.empsys.entity.TicketEntity;
import com.empsys.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Adjust if needed
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @PostMapping("/raise")
    public TicketEntity raiseTicket(@RequestBody TicketEntity ticket) {
        return ticketRepository.save(ticket);
    }

    @GetMapping("/hr/tickets")
    public List<TicketEntity> getAllTickets() {
        return ticketRepository.findAll();
    }
}
