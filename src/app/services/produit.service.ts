export class ProduitService{
    produits = [
        {
          cod: "001",
          nom: "Masque 175x95mm lot * 10pcs",
          prix: 1.20,
          stock: 2,
          ajoute: false
        },
        {
          cod: "002",
          nom: "Masque taille adulte lot * 50pcs",
          prix: 6,
          stock: 4,
          ajoute: false
        },
        {
          cod: "003",
          nom: "Masque enfant 145x95mm lot * 7pcs",
          prix: 6.93,
          stock: 1,
          ajoute: false
        }
    ];
    produitsPanier = [];
    remplirPanier(produitCod, produitNom, produitPrix) {
        let i =this.produitsPanier.length;
        let existe = false;
        if (i==0) {
            this.produitsPanier[0] = { cod:  produitCod,
                                       nom:  produitNom,
                                       prix: produitPrix,
                                       cant: 1};
        } else {
            for ( let j = 0; j < i; j++ ){
                if (this.produitsPanier[j].cod == produitCod) {
                    this.produitsPanier[j].cant+=1;
                    existe = true;
                } 
            }
            if (!existe) {
                this.produitsPanier[i] = { cod:  produitCod,
                                           nom:  produitNom,
                                           prix: produitPrix,
                                           cant: 1
                                         };
            }
        };   
    };
}