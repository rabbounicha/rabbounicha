/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package td4;

/**
 *
 * @author admin
 */
public abstract class Animal {

    protected String nom;
    protected String type;
    protected double poids;

    public Animal(String n, String t, double p) {
        this.nom = n;
        this.type = t;
        this.poids = p;
    }

    public abstract String crie();

 
    public String courir(){
       return ("je suis un " +this.nom+ " et je cours »");      
     }
    
    public String ho(){
        return ("c est un "+ this.nom+ "de type"+ this.type+" qui pese"+this.poids);
    }
    
     public double vitesse (int t){
        return 18*t*0.5;
    }
    
    public double vitesse (double t){
        return 18*t*0.3;
    }

    public String getNom() {
        return nom;
    }

    public double getPoids() {
        return poids;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPoids(double poids) {
        this.poids = poids;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
    
    
}
