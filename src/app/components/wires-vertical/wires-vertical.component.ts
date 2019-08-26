import { Component, OnInit } from '@angular/core';
import { BombService } from '../../services/bomb/bomb.service';

interface CutWireInterface {
  color: string;
  cut?: boolean;
  ledOn?: LedInterface;
  ledOff?: LedInterface;
}

interface LedInterface {
  cut?: boolean;
  starOn?: boolean;
  starOff?: boolean;
}

@Component({
  selector: 'app-wires-vertical',
  templateUrl: './wires-vertical.component.html',
  styleUrls: ['./wires-vertical.component.scss']
})
export class WiresVerticalComponent implements OnInit {
  wires: CutWireInterface[];

  constructor(private bombService: BombService) { }

  ngOnInit() {
    this.bombService.getBombParameters().subscribe(bombParameters => {
      this.wires = [];

      const blueWire: CutWireInterface = {
        color: 'blue',
        ledOn: {
          cut: bombParameters.parallel,
        },
        ledOff: {
          starOn: false,
          starOff: bombParameters.parity
        },
      };

      const redWire: CutWireInterface = {
        color: 'red',
        ledOn: {
          cut: bombParameters.nbBatteries > 1,
        },
        ledOff: {
          starOn: true,
          starOff: bombParameters.parity
        },
      };

      const blueRedWire: CutWireInterface = {
        color: 'blueRed',
        ledOn: {
          starOn: false,
          starOff: bombParameters.parity
        },
        ledOff: {
          starOn: bombParameters.parallel,
          starOff: bombParameters.parity
        },
      };

      const whiteWire: CutWireInterface = {
        color: 'white',
        ledOn: {
          starOn: bombParameters.nbBatteries > 1,
          starOff: false
        },
        ledOff: {
          cut: true,
        },
      };

      const wires = [
        blueWire,
        redWire,
        blueRedWire,
        whiteWire
      ];

      wires.forEach((wire: CutWireInterface) => {
        let cutIfLedOn = wire.ledOn.cut;
        let cutIfLedOff = wire.ledOff.cut;

        if (cutIfLedOn === undefined && wire.ledOn.starOn === wire.ledOn.starOff) {
          cutIfLedOn = wire.ledOn.starOn;
        }

        if (cutIfLedOff === undefined && wire.ledOff.starOn === wire.ledOff.starOff) {
          cutIfLedOff = wire.ledOff.starOn;
        }

        if (cutIfLedOn !== undefined && cutIfLedOff !== undefined && cutIfLedOn === cutIfLedOff) {
          this.wires.push({ color: wire.color, cut: cutIfLedOn });
        } else {
          this.wires.push({
            color: wire.color,
            ledOn: cutIfLedOn !== undefined ? { cut: cutIfLedOn } : wire.ledOn,
            ledOff: cutIfLedOff !== undefined ? { cut: cutIfLedOff } : wire.ledOff,
          });
        }
      });
    });
  }

  isDefined(value: any) {
    return typeof value !== 'undefined';
  }
}
