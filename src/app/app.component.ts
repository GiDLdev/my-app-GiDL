import { Component, OnInit } from '@angular/core';
import { ProduitService } from './services/produit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  produits = [];


  constructor(private produitService: ProduitService){
  };
  ngOnInit(){
    this.produits = this.produitService.produits;
  };

};  