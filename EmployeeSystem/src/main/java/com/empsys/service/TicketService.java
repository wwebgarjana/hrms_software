package com.empsys.service;

import com.empsys.dao.TicketRepository;
import com.empsys.entity.TicketEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public TicketEntity raiseTicket(TicketEntity ticket) {
        return ticketRepository.save(ticket);
    }

    public List<TicketEntity> getAllTickets() {
        return ticketRepository.findAll();
    }
}
