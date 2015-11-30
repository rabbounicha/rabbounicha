/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semaine506;

/**
 *
 * @author leclerc1
 */
import java.awt.Dimension;

import javax.swing.JFrame;

public class Fenetre1 extends JFrame {

    public static void main(String[] args) {

        new Fenetre();

    }

    private Panneau1 pan = new Panneau1();

    public Fenetre1() {

        this.setTitle("Animation");

        this.setSize(700, 450);

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        this.setLocationRelativeTo(null);

        this.setContentPane(pan);

        this.setVisible(true);

        go();

    }

    private void go() {

        // Les coordonnées de départ de notre rond
        int x = pan.getPosX(), y = pan.getPosY();
        int x1 = pan.getPosX1(), y1 = pan.getPosY1();

        // Le booléen pour savoir si l'on recule ou non sur l'axe x
        boolean backX = false;
        boolean backX1 = false;

        // Le booléen pour savoir si l'on recule ou non sur l'axe y
        boolean backY = false;
        boolean backY1 = false;

        // Dans cet exemple, j'utilise une boucle while
        // Vous verrez qu'elle fonctionne très bien
        while (true) {

            // Si la coordonnée x est inférieure à 1, on avance
            if (x < 1) {
                backX = false;
            }
            
            if (x1 < 1) {
                backX1 = false;
            }

            // Si la coordonnée x est supérieure à la taille du Panneau moins la taille du rond, on recule
            if (x > pan.getWidth() - 25) {
                backX = true;
            }
            
            if (x1 > pan.getWidth() - 25) {
                backX1 = true;
            }

            // Idem pour l'axe y
            if (y < 1) {
                backY = false;
            }
            
            if (y1 < 1) {
                backY1 = false;
            }

            if (y > pan.getHeight() - 25) {
                backY = true;
            }
            
            if (y1 > pan.getHeight() - 25) {
                backY1 = true;
            }

            // Si on avance, on incrémente la coordonnée
            // backX est un booléen, donc !backX revient à écrire
            // if (backX == false)
            if (!backX) {
                pan.setPosX(++x);
            } // Sinon, on décrémente
            else {
                pan.setPosX(--x);
            }
            
            if (!backX1) {
                pan.setPosX1(++x1);
            } // Sinon, on décrémente
            else {
                pan.setPosX1(--x1);
            }

            // Idem pour l'axe Y
            if (!backY) {
                pan.setPosY(++y);
            } else {
                pan.setPosY(--y);
            }
            
            if (!backY1) {
                pan.setPosY1(++y1);
            } else {
                pan.setPosY1(--y1);
            }

            // On redessine notre Panneau
            pan.repaint();

            // Comme on dit : la pause s'impose ! Ici, trois millièmes de seconde
            try {

                Thread.sleep(1);

            } catch (InterruptedException e) {

                e.printStackTrace();

            }

        }

    }
}
