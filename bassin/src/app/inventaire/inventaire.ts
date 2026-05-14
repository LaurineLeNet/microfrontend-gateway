import { Component } from '@angular/core';

interface Equipement {
  nom: string;
  quantite: number;
}

@Component({
  selector: 'app-inventaire',
  imports: [],
  templateUrl: './inventaire.html',
  styleUrl: './inventaire.css',
})
export class Inventaire {
  inventaire: Equipement[] = [
    { nom: 'Pull boys', quantite: 12 },
    { nom: 'Planches', quantite: 8 },
    { nom: 'Palmes', quantite: 15 },
  ];
}
