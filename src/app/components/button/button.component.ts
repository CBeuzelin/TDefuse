import { Component, OnInit } from '@angular/core';
import { BombService } from '../../services/bomb/bomb.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  private BUTTON_COLORS = ['blue', 'white', 'yellow', 'red'];
  private BUTTON_TEXTS = ['abort', 'detonate', 'hold'];

  private buttonColor = 'blue';
  private buttonText = 'abort';

  private pressAndRelease: boolean;

  constructor(private bombService: BombService) { }

  ngOnInit() {
  }

  private onButtonClick(buttonColor: string, buttonText: string) {
    this.bombService.getBombParameters().subscribe(bombParameters => {
      if (buttonColor === 'blue' && buttonText === 'abort') {
        this.pressAndRelease = false;
      } else if (bombParameters.nbBatteries > 1 && buttonText === 'detonate') {
        this.pressAndRelease = true;
      } else if (buttonColor === 'white' && bombParameters.carIndicator) {
        this.pressAndRelease = false;
      } else if (bombParameters.nbBatteries > 2 && bombParameters.frkIndicator) {
        this.pressAndRelease = true;
      } else if (buttonColor === 'yellow') {
        this.pressAndRelease = false;
      } else  {
        this.pressAndRelease = buttonColor === 'red' && buttonText === 'hold';
      }
    });
  }

  private isDefined(value: any) {
    return typeof value !== 'undefined';
  }
}
