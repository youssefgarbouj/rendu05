import { Routes } from '@angular/router';
import { Motos } from './motos/motos';
import { AddMoto } from './add-moto/add-moto';
import { UpdateMoto } from './update-moto/update-moto';
import { RechercheParCategorie } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
export const routes: Routes = [
  { path: 'motos', component: Motos },
  { path: 'add-moto', component: AddMoto },
  { path: '', redirectTo: 'motos', pathMatch: 'full' },
  { path: 'update-moto/:id', component: UpdateMoto },
  {path: "rechercheParCategorie", component : RechercheParCategorie},
  {path: "rechercheParNom", component : RechercheParNom},
];
