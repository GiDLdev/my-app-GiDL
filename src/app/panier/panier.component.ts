import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  @Input() produitNom: string;

  @Input() produitPrix: number; 
 
  constructor(private produitService : ProduitService) { }


  ngOnInit(): void {
  };

  produitsPanier = this.produitService.produitsPanier;

  calculTotal(){
    let total=0;
    for (let i = 0; i < this.produitsPanier.length; i++){
      total +=  (this.produitsPanier[i].prix *  this.produitsPanier[i].cant);
    }
    
    console.log(total);
    return(total);
  }

  checkPanier() {
     return(this.produitsPanier.length>0);

  };
}
