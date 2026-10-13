import { Routes } from '@angular/router';
import { Motos } from './motos/motos';
import { AddMoto } from './add-moto/add-moto';
import { UpdateMoto } from './update-moto/update-moto';

export const routes: Routes = [
  { path: 'motos', component: Motos },
  { path: 'add-moto', component: AddMoto },
  { path: '', redirectTo: 'motos', pathMatch: 'full' },
  { path: 'update-moto/:id', component: UpdateMoto }
];
