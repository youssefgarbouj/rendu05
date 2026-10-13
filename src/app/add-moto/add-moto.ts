import { Categorie } from './../model/categorie.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-moto',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-moto.html',
})
export class AddMoto implements OnInit {
  newMoto = new Moto();
  message: string | undefined;
  newCategorie!: Categorie ;
  categories!: Categorie[];
  newidCat!: number;


  constructor(private motoService: MotoService, private router: Router) {}

  ngOnInit(): void {  
      this.categories =this.motoService.listeCategories();
  }

  addMoto() {

    this.newCategorie = this.motoService.consulterCategorie(this.newidCat!);
    this.newMoto.categorie = this.newCategorie;
    this.motoService.ajouterMoto(this.newMoto);
    this.message = "Moto " + this.newMoto.modeleMoto + " ajoutée avec succès !";
    this.router.navigate(['motos']);

  }
}
