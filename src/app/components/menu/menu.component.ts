import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  moduleList = [
    {
      name: 'Fils Horizontaux',
      route: 'wires-horizontal',
    },
    {
      name: 'Bouton',
      route: 'button',
    },
    {
      name: 'Symboles',
      route: 'symbols',
    },
    {
      name: 'Simon',
      route: 'simon',
    },
    {
      name: 'Calculatrice',
      route: 'calculator',
    },
    {
      name: 'Memory',
      route: 'memory',
    },
    {
      name: 'Morse',
      route: 'morse',
    },
    {
      name: 'Fils Verticaux',
      route: 'wires-vertical',
    },
    {
      name: 'Fils Croisés',
      route: 'wires-crossed',
    },
    {
      name: 'Labyrinthe',
      route: 'maze',
    },
    {
      name: 'Mot de Passe',
      route: 'password',
    },
    {
      name: 'Molette',
      route: 'knob',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
