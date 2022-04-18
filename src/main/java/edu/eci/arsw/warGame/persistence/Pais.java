package edu.eci.arsw.warGame.persistence;


import java.util.concurrent.atomic.AtomicInteger;

public class Pais {
    private String dueño;
    private int totalTropas = 20;
    private Object flag;
    private int limite;
    private Thread aumTropas;
    private int coordX;
    private int coordY;

    public Pais(int Limite, String dueño, int coordX, int coordY) {
        flag = new Object();
        this.coordX = coordX;
        this.coordY = coordY;
        this.dueño = dueño;
        this.limite = Limite;
        aumTropas = new aumentoTropas();
        starAumentoTropas();

    }
    public void starAumentoTropas(){
        aumTropas.start();
    }
    public String getDueño() {
        return dueño;
    }

    public int getCoordX() {
        return coordX;
    }

    public int getCoordY() {
        return coordY;
    }

    public synchronized void bajoAtaque(String atacante){
        synchronized (flag) {
            if (totalTropas > 0 && atacante == dueño) {
                totalTropas += 1;
            } else if (totalTropas == 0) {
                dueño = atacante;
                totalTropas += 1;

            } else {
                totalTropas -= 1;
            }
        }

    }
    public void Atacar(Pais pais) {
        aumentoTropas.interrupted();
        HiloAtaque hilo = new HiloAtaque(pais);
        hilo.start();



    }
    public class HiloAtaque extends Thread{
        Pais paisAtacado;
        public HiloAtaque(Pais pais){
            paisAtacado =pais;

        }
        public void run (){
            while(totalTropas> 0) {
                synchronized (flag) {
                    totalTropas -= 1;
                    paisAtacado.bajoAtaque(dueño);
                }
            }
            starAumentoTropas();

        }
    }

    public class aumentoTropas extends Thread {
        public aumentoTropas() {

        }

        public void run() {
            while (true) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                if(totalTropas <= limite){
                    totalTropas += 1;
                }


            }
        }

    }






    /**public void Atacar(Pais Pais) {

        HiloAtaque hilo = new HiloAtaque(Pais);
        hilo.start();

    }

    public void Atacado() {
        try {
            wait(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        HiloAtacado hilo = new HiloAtacado();
        hilo.start();

    }

    ///////////////////////////////
    public class HiloAtaque extends Thread {
        private Pais paisAtacado;

        public HiloAtaque(Pais Pais) {
            paisAtacado = Pais;

        }

        public void run() {
            // aumTropas.wait();
            while (totalTropas >= 0) {
                synchronized (flag) {
                    totalTropas -= 1;
                }
                if (paisAtacado.colaAtacantes.size() == 0) {
                    paisAtacado.Atacado();
                }
                try {
                    paisAtacado.colaAtacantes.put(dueño);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }
            // aumentoTropas.start();
        }

    }

    ////////////////////////////////////////////////////////
    public class HiloAtacado extends Thread {
        public HiloAtacado() {

        }

        public void run() {
            // aumTropas.wait();
            while (colaAtacantes.size() != 0) {
                synchronized (flag) {
                    String atacante;
                    try {
                        atacante = colaAtacantes.take();
                        if (totalTropas > 0 && atacante == dueño) {
                            totalTropas += 1;
                        } else if (totalTropas == 0) {
                            dueño = atacante;
                            totalTropas += 1;

                        } else {
                            totalTropas -= 1;
                        }

                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                }

            }
            // aumentoTropas.start();

        }
    }

    public class aumentoTropas extends Thread {
        public aumentoTropas() {

        }

        public void run() {
            while (totalTropas <= limite) {
                totalTropas += 1;

            }
        }

    } */
}
