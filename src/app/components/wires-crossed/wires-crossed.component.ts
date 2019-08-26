import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wires-crossed',
  templateUrl: './wires-crossed.component.html',
  styleUrls: ['./wires-crossed.component.scss']
})
export class WiresCrossedComponent implements OnInit {
  private letters = ['A', 'B', 'C'];
  private wires = [
    { color: 'red', step: -1, cutIf: ['C', 'B', 'A', 'AC', 'B', 'AC', 'ABC', 'AB', 'B'] },
    { color: 'blue', step: -1, cutIf: ['B', 'AC', 'B', 'A', 'B', 'BC', 'C', 'AC', 'A'] },
    { color: 'black', step: -1, cutIf: ['ABC', 'AC', 'B', 'AC', 'B', 'BC', 'AB', 'C', 'C'] },
  ];

  private cutWire: number[];
  private timeoutHandler = setTimeout(() => {});

  constructor() { }

  ngOnInit() {
    this.resetList();
  }

  private onClickLetter(colorId: number, letter: string) {
    if (this.wires[colorId].step < 8) {
      clearTimeout(this.timeoutHandler);
      this.cutWire[colorId] = 0;
      this.wires[colorId].step += 1;
      this.cutWire[colorId] = this.wires[colorId].cutIf[this.wires[colorId].step].includes(letter) ? 1 : 2;
      this.timeoutHandler = setTimeout(() => this.cutWire[colorId] = 0, 1000);
    }
  }

  private onClickRevert(colorId: number) {
    this.wires[colorId].step -= 1;
  }

  private resetList() {
    this.cutWire = [0, 0, 0];
    this.wires.forEach(wire => wire.step = -1);
  }

  private getColorName(color: string): string {
    switch (color) {
      case 'red':
        return 'Rouge';
      case 'blue':
        return 'Bleu';
      case 'black':
        return 'Noir';
    }
  }
}
