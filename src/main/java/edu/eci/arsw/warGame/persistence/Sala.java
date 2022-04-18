package edu.eci.arsw.warGame.persistence;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.SynchronousQueue;

public class Sala {
    public SynchronousQueue<ArrayList> colaEventos;
    public HashMap<String, Pais> listaPaises;

    public Sala (){
        colaEventos = new SynchronousQueue<ArrayList>();
        listaPaises = new HashMap<String, Pais>();

    }
    public void addPais(String Dueño, int x, int y, int limite){
        Pais pais  = new Pais(limite,Dueño,x,y);
        listaPaises.put(Dueño, pais);
    }

    public Pais getPais(String Dueño){
        return listaPaises.get(Dueño);
    }

}
