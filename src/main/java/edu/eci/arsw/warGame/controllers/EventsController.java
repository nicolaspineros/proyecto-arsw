package edu.eci.arsw.warGame.controllers;

import edu.eci.arsw.warGame.model.Evento;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class EventsController {

    @MessageMapping("/events")
    @SendTo("/chat-events/evento") //Notificamos a todos los usuarios el evento
    public Evento recibirEvento(Evento evento){
        return new Evento("Respuesta de" +evento.getContent());
    }

}
