package edu.eci.arsw.warGame.persistence;

import com.mongodb.MongoException;
import com.mongodb.client.*;
import com.mongodb.client.model.Filters;

import org.bson.Document;
import edu.eci.arsw.warGame.model.User;
import java.util.ArrayList;

public class ConnectionMongo {
    public static MongoClient client;
    public static MongoDatabase db;
    public static MongoCollection col;

    public ConnectionMongo() {
        client = MongoClients.create("mongodb+srv://Admin:Admin@cluster0.bvczb.mongodb.net/WarGame?retryWrites=true&w=majority");
        db = client.getDatabase("WarGame");
        col = db.getCollection("Users");

    }

    public static void addUser(User user) {
        FindIterable findIterable = col.find();
        ArrayList<Document> documents = new ArrayList<Document>();
        findIterable.into(documents);
        Document sampleDoc = new Document("_id", user.getName());
        col.insertOne(sampleDoc);

    }

    public static Document getUser(String name) {
        FindIterable findIterable = col.find(Filters.and(Filters.eq("_id", name)));
        ArrayList<Document> documents = new ArrayList<Document>();
        findIterable.into(documents);
        
        if (documents.isEmpty()) {
            //throw new MongoException("Error");
            documents.add(new Document("_id", ""));
        }
        
        return documents.get(0);

    }
}
