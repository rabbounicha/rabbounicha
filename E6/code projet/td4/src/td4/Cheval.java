/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package td4;

import java.util.ArrayList;

/**
 *
 * @author admin
 */
public final class Cheval extends Animal {

    private String couleur;

    public Cheval(String n, String t, double p, String c) {
        super(n, t, p);
        this.couleur = c;
    }
    
      public String ho(){
       return super.ho()+(" Et je suis" + this.couleur);      
     }
      
    @Override
     public String courir(){
       return super.courir();
}

    @Override
    public String crie() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public String getCouleur() {
        return couleur;
    }

    @Override
    public String getNom() {
        return super.getNom();
    }

    @Override
    public double getPoids() {
        return super.getPoids();
    }

    @Override
    public String getType() {
        return super.getType();
    }

    public void setCouleur(String couleur) {
        this.couleur = couleur;
    }

    @Override
    public void setNom(String nom) {
        super.setNom(nom);
    }

    @Override
    public void setPoids(double poids) {
        super.setPoids(poids);
    }

    @Override
    public void setType(String type) {
        super.setType(type);
    }
    
    
    
   
    
}

