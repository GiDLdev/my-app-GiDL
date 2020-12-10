import { Component,Input, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  @Input() produitCod: string;

  @Input() produitNom: string;

  @Input() produitPrix: number;

  @Input() produitStock: number;

  @Input() produitAjoute: boolean;  

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
  }
  checkStock(){
    return(!(this.produitStock>0));
  }

  ajouterAuPanier(){
    console.log("Produit ajouté au panier");
    this.produitAjoute = true;
    
    this.produitService.remplirPanier(this.produitCod, this.produitNom, this.produitPrix);   
  };
  
}
