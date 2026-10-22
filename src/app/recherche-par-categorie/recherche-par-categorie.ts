import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { Categorie } from '../model/categorie.model';
import { MotoService } from '../services/moto';

@Component({
 selector: 'app-recherche-par-categorie',
 imports: [],
 templateUrl: './recherche-par-categorie.html',
 styles: ``,
})
export class RechercheParCategorie implements OnInit {
 categories: Categorie[] = [];
 motos: Moto[] = [];
 idcat: number | null = null;

 constructor(private motoService: MotoService) {}

 ngOnInit(): void {
   this.categories = this.motoService.listeCategories();
   this.idcat = this.categories[0]?.idCat ?? null;

   if (this.idcat !== null) {
     this.motos = this.motoService.rechercherParCategorie(this.idcat);
   }
 }

 onChange(idCat: string): void {
   this.idcat = Number(idCat);
   this.motos = this.motoService.rechercherParCategorie(this.idcat);
 }
}
