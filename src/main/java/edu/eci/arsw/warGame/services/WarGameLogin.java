package edu.eci.arsw.warGame.services;


import edu.eci.arsw.warGame.persistence.ConnectionMongo;
import org.bson.Document;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service("WarGameLogin")

public class WarGameLogin {

    /**public Document Login(String nameLogin){
        //JSONObject respuesta = new JSONObject();
        ConnectionMongo connection = new ConnectionMongo();
        Document nameDB = ConnectionMongo.getUser(nameLogin);
        //respuesta.put("_id", nameDB.get("_id"));
        return nameDB;
    
    }*/

    public Document Login(String nameLogin) {
        ConnectionMongo connection = new ConnectionMongo();
        Document nameDB = connection.getUser(nameLogin);
        return nameDB;
    }

}
