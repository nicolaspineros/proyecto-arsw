package edu.eci.arsw.warGame.services;

import edu.eci.arsw.warGame.model.Player;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class InGameServicesImpl implements InGameServices{
    Set<Player> listaJugadores= new HashSet<Player>();

    @Override
    public void registerPlayerToRace(Player player) throws ServicesException {
        listaJugadores.add(player);
    }

    @Override
    public Set<Player> getRegisteredPlayers() throws ServicesException {
        return listaJugadores;
    }
}
