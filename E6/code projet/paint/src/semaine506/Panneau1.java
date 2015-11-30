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
import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JPanel;

public class Panneau1 extends JPanel {

    private int posX = -25;
    private int posY = -25;

    private int posX1 = 10;
    private int posY1 = 700;

      private int posX2 = 50;
    private int posY2 = 500;
    
    public void paintComponent(Graphics g) {
        // On décide d'une couleur de fond pour notre rectangle
        g.setColor(Color.black);
        // On dessine celui-ci afin qu'il prenne tout la surface
//        g.fillRect(0, 0, this.getWidth(), this.getHeight());
        // On redéfinit une couleur pour notre rond
        g.setColor(Color.blue);
        // On le dessine aux coordonnées souhaitées
        g.fillOval(posX, posY, 20, 20);
                //g.fillRect(posX2, posY2, 20, 20);
//g.fillRoundRect(posX2, posX2, 20, 30, 1700, 1550);

        g.setColor(Color.black);

        g.fillOval(posX1, posY1, 20, 20);
    }

    public int getPosX() {
        return posX;
    }

    public void setPosX(int posX) {
        this.posX = posX;
    }

    public int getPosY() {
        return posY;
    }

    public void setPosY(int posY) {
        this.posY = posY;
    }

    public int getPosX1() {
        return posX1;
    }

    public void setPosX1(int posX1) {
        this.posX1 = posX1;
    }

    public int getPosY1() {
        return posY1;
    }

    public void setPosY1(int posY1) {
        this.posY1 = posY1;
    }

}
