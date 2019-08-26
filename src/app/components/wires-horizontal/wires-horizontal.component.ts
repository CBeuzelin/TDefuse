import { Component, OnInit } from '@angular/core';
import { BombService } from '../../services/bomb/bomb.service';
import Bomb from '../../models/bomb';

@Component({
  selector: 'app-wires-horizontal',
  templateUrl: './wires-horizontal.component.html',
  styleUrls: ['./wires-horizontal.component.scss']
})
export class WiresHorizontalComponent implements OnInit {
  nbWires = '3';
  wires: number[] = Array(parseInt(this.nbWires, 10)).fill(0).map((x, i) => i);
  wiresColor: string[] = Array(parseInt(this.nbWires, 10)).fill('white');
  colorSet: string[] = ['white', 'blue', 'yellow', 'red', 'black'];
  wireToCut: number;

  constructor(private bombService: BombService) { }

  ngOnInit() {
    this.getWireToCut();
  }

  onChangeNbWires() {
    this.wires = Array(parseInt(this.nbWires, 10)).fill(0).map((x, i) => i);
    this.wiresColor = Array(parseInt(this.nbWires, 10)).fill('white');

    this.getWireToCut();
  }

  onChangeColor(wire: number, color: string) {
    this.wiresColor[wire] = color;

    this.getWireToCut();
  }

  private getWireToCut() {
    this.wireToCut = 0;
    let nbBlueWires = 0;
    let nbRedWires = 0;
    let nbYellowWires = 0;
    let nbBlackWires = 0;
    let nbWhiteWires = 0;

    this.wiresColor.forEach(wireColor => {
      switch (wireColor) {
        case 'blue':
          nbBlueWires += 1;
          break;
        case 'red':
          nbRedWires += 1;
          break;
        case 'yellow':
          nbYellowWires += 1;
          break;
        case 'black':
          nbBlackWires += 1;
          break;
        case 'white':
          nbWhiteWires += 1;
          break;
      }
    });

    switch (parseInt(this.nbWires, 10)) {
      case 3:
        if (nbRedWires === 0) {
          this.wireToCut = 2;
        } else if (this.wiresColor[this.wiresColor.length - 1] === 'white') {
          this.wireToCut = 3;
        } else if (nbBlueWires > 1) {
          this.wireToCut = this.getLastWireOfColor('blue');
        } else {
          this.wireToCut = 3;
        }
        break;

      case 4:
        this.bombService.getBombParameters().subscribe(bombParameters => {
          if (nbRedWires > 1 && !bombParameters.parity) {
            this.wireToCut = this.getLastWireOfColor('red');
          } else if (this.wiresColor[this.wiresColor.length - 1] === 'yellow' && nbRedWires === 0) {
            this.wireToCut = 1;
          } else if (nbBlueWires === 1) {
            this.wireToCut = 1;
          } else if (nbYellowWires > 1) {
            this.wireToCut = 4;
          } else {
            this.wireToCut = 2;
          }
        });
        break;

      case 5:
        this.bombService.getBombParameters().subscribe(bombParameters => {
          if (this.wiresColor[this.wiresColor.length - 1] === 'black' && !bombParameters.parity) {
            this.wireToCut = 4;
          } else if (nbRedWires === 1 && nbYellowWires > 1) {
            this.wireToCut = 1;
          } else if (nbBlackWires === 0) {
            this.wireToCut = 2;
          } else {
            this.wireToCut = 1;
          }
        });
        break;

      case 6:
        this.bombService.getBombParameters().subscribe(bombParameters => {
          if (nbYellowWires === 0 && !bombParameters.parity) {
            this.wireToCut = 3;
          } else if (nbYellowWires === 1 && nbWhiteWires > 1) {
            this.wireToCut = 4;
          } else if (nbRedWires === 0) {
            this.wireToCut = 6;
          } else {
            this.wireToCut = 4;
          }
        });
        break;
    }
  }

  private getLastWireOfColor(color: string): number {
    let lastColorWire = 0;
    this.wiresColor.forEach((wireColor, index) => {
      if (wireColor === color) {
        lastColorWire = index + 1;
      }
    });

    return lastColorWire;
  }

}
