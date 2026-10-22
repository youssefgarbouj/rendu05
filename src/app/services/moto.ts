import { Injectable } from '@angular/core';
import { Moto } from '../model/moto.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class MotoService {
  motos: Moto[];
  categories!: Categorie[];

  constructor() {
    this.categories = [
      { idCat: 1, nomCat: "500cc" },
      { idCat: 2, nomCat: "750cc" },
      { idCat: 3, nomCat: "1000cc" }
    ];
    this.motos = [
      { idMoto: 1, marqueMoto: "Yamaha", modeleMoto: "MT-07", prixMoto: 7500, dateFabrication: new Date("2023-01-01"), categorie: this.categories[0] },
      { idMoto: 2, marqueMoto: "Honda", modeleMoto: "CB500F", prixMoto: 6800, dateFabrication: new Date("2023-02-01"), categorie: this.categories[1] },
      { idMoto: 3, marqueMoto: "Kawasaki", modeleMoto: "Z650", prixMoto: 7200, dateFabrication: new Date("2023-03-01"), categorie: this.categories[2] }
    ];
  }

  listeMotos(): Moto[] {
    return this.motos;
  }

  ajouterMoto(moto: Moto) {
    this.motos.push(moto);
  }

  supprimerMoto(moto: Moto) {
    const index = this.motos.indexOf(moto, 0);
    if (index > -1) {
      this.motos.splice(index, 1);
    }
  }

  consulterMoto(id: number): Moto {
    return this.motos.find(moto => moto.idMoto == id)!;
  }

  updateMoto(moto: Moto) {
    this.supprimerMoto(moto);
    this.ajouterMoto(moto);
  }
  listeCategories(): Categorie[] {
    return this.categories;
  }
  consulterCategorie(id: number): Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  }

  rechercherParCategorie(idCat: number): Moto[] {
    return this.motos.filter(moto => moto.categorie?.idCat === idCat);
  }
}
