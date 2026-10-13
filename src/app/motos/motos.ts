import { Component } from '@angular/core';
import { Moto } from '../model/moto.model';
import { CommonModule } from '@angular/common';
import { MotoService } from '../services/moto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-motos',
  imports: [CommonModule, RouterLink],
  templateUrl: './motos.html',
})
export class Motos {
  motos: Moto[];

  constructor(private motoService: MotoService) {
    this.motos = this.motoService.listeMotos();
  }

  deleteMoto(moto: Moto) {
    const conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.motoService.supprimerMoto(moto);
    }
  }
}
