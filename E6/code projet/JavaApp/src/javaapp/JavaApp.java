/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapp;

/**
 *
 * @author leclerc1
 */
public class JavaApp {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        new Login(null, true).show();
        
        Insert i;
        i = new Insert();
        i.setVisible(true);
        
//        
//          TicTacToe fen;
//        fen = new TicTacToe();
//        fen.setVisible(true);
//        
      Quiz q;
        q = new Quiz();
        q.setVisible(true);
        
    
    }
    
}
