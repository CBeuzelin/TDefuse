import { Component, OnInit } from '@angular/core';
import { BombService } from '../../services/bomb/bomb.service';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss']
})
export class SimonComponent implements OnInit {

  SIMON = [
    [
      ['blue', 'red', 'yellow', 'green'],
      ['yellow', 'green', 'blue', 'red'],
      ['green', 'red', 'yellow', 'blue'],
    ],
    [
      ['blue', 'yellow', 'green', 'red'],
      ['red', 'blue', 'yellow', 'green'],
      ['yellow', 'green', 'blue', 'red'],
    ]
  ];

  activeTable = 1;

  constructor(private bombService: BombService) { }

  ngOnInit() {
    this.bombService.getBombParameters().subscribe(bombParameters => {
      if (bombParameters.voyel) {
        this.activeTable = 1;
      } else {
        this.activeTable = 0;
      }
    });
  }

  getColorName(color: string): string {
    switch (color) {
      case 'red':
        return 'Rouge';
      case 'blue':
        return 'Bleu';
      case 'green':
        return 'Vert';
      case 'yellow':
        return 'Jaune';
    }
  }

}
