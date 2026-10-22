
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moto } from '../model/moto.model';
import { Observable } from 'rxjs';
@Component({
selector: 'app-recherche-par-nom',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './recherche-par-nom.html',
styles: ``
})   
@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-nom.html',
  styles: ``,
})
export class RechercheParNom {
  nomProduit: string = '';
  produits: any[] = [];
  apiURL: any;
  http: HttpClient;
  motoService: any;
constructor(http: HttpClient) {
  this.http = http;

}

  rechercherProds() {
    // Logique de recherche des produits par nom
    console.log('Recherche de produits avec le nom :', this.nomProduit);
    // Vous pouvez remplacer cette logique par un appel à un service pour récupérer les produits correspondants
    // Exemple :
    // this.produitService.rechercherParNom(this.nomProduit).subscribe((resultats) => {
    //   this.produits = resultats;
    // });
  }
  rechercherParNom(nom: string):Observable< Moto[]> {
const url = `${this.apiURL}/prodsByName/${nom}`;
return this.http.get<Moto[]>(url);
}
allProduits! : Moto[];
searchTerm!: string;
ngOnInit(): void {
this.motoService.listeProduit().subscribe((prods: Moto[]) => {
console.log(prods);
this.allProduits = prods;
});
}
onKeyUp(filterText : string){
this.produits = this.allProduits.filter(item =>
item.modeleMoto?.toString().includes(filterText) ?? false);
}
}
