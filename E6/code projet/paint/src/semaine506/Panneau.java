/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semaine506;

import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JPanel;

public class Panneau extends JPanel {

    public void paintComponent(Graphics g) {
        //Vous verrez cette phrase chaque fois que la méthode sera invoquée
        System.out.println("Je suis exécutée !");
        g.setColor(Color.RED);
        g.fillOval(100, 100, 300, 300);
        g.fillOval(20, 20, 300, 300);
        g.fillOval(20, 20, 300, 300);

        int x1 = this.getWidth() / 2;
        int y1 = this.getHeight() / 2;
        g.drawOval(x1, y1, this.getWidth() / 2, this.getHeight() / 2);
    }
}
