/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semaine506;

import javax.swing.JFrame;
 
public class Fenetre extends JFrame {
    
  public Fenetre(){                
    
      this.setTitle("Component Paint");
    
      this.setSize(2000, 1500);
    
      this.setLocationRelativeTo(null);               
   
      this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    
      this.setContentPane(new Panneau());
    
      this.setVisible(true);
  
  }     

}