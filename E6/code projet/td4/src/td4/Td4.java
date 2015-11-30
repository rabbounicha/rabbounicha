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
public class Td4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here

        
        Animal a = new Animal("animal", "US", 15) {
            @Override
            public String crie() {
                throw new UnsupportedOperationException("Not supported yet.");
            }
        };
        Cheval c = new Cheval("cheval", "US", 15, "vert");
        Zebre z = new Zebre("zebre", "US", 15, 10);
        System.out.println(a.ho());
        System.out.println(c.ho());
        System.out.println(z.ho());
        
        System.out.println(a.courir());
        System.out.println(c.courir());
        System.out.println(z.courir());
        
        System.out.println("cet animal va à " + a.vitesse(65.0) + "km/h");
        
        ArrayList<Animal> collAnimaux = new ArrayList();
        collAnimaux.add(new Cheval("ghju", "fhj", 15, "fg"));
        collAnimaux.add(new Zebre("ghju", "fhj", 15, 20));
        collAnimaux.add(new Cheval("ghju", "fhj", 15, "fg"));
        collAnimaux.add(new Zebre("ghju", "fhj", 15, 15));
        collAnimaux.add(new Cheval("ghju", "fhj", 15, "fg"));
        
        for (Animal aa : collAnimaux) {
            System.out.println("Animal" + aa.getNom());
        }
    }
}
