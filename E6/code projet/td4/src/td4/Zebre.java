/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package td4;

/**
 *
 * @author admin
 */
public final class Zebre extends Animal {

    private final int nbrRay; //10

    public Zebre(String n, String t, double p, int nr) {
        super(n, t, p);
        this.nbrRay = nr;
    }
     public String ho(){
       return super.ho() + (" et qui a "+this.nbrRay);      
     }

    @Override
     public String courir(){
       return super.courir();
}

    @Override
    public String crie() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public int getNbrRay() {
        return nbrRay;
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

    @Override
    public void setNom(String nom) {
        super.setNom(nom);
    }

    @Override
    public void setType(String type) {
        super.setType(type);
    }

    @Override
    public void setPoids(double poids) {
        super.setPoids(poids);
    }
    
        
   
}