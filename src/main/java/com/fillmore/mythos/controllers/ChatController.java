package com.fillmore.mythos.controllers;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.fillmore.mythos.Message;

@Controller
public class ChatController {
	
	    @MessageMapping("/hello")
	    @SendTo("/topic/greetings")
	    public Message greeting(Message message) throws Exception {
	        return new Message("zubat");
	    }

	}

