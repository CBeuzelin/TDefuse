import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morse',
  templateUrl: './morse.component.html',
  styleUrls: ['./morse.component.scss']
})
export class MorseComponent implements OnInit {

  private MORSE_CODE = [
    { letter: 'a', morse: [false, true] },
    { letter: 'b', morse: [true, false, false, false] },
    { letter: 'c', morse: [true, false, true, false] },
    { letter: 'd', morse: [true, false, false] },
    { letter: 'e', morse: [false] },
    { letter: 'f', morse: [false, false, true, false] },
    { letter: 'g', morse: [true, true, false] },
    { letter: 'h', morse: [false, false, false, false] },
    { letter: 'i', morse: [false, false] },
    { letter: 'j', morse: [false, true, true, true] },
    { letter: 'k', morse: [true, false, true] },
    { letter: 'l', morse: [false, true, false, false] },
    { letter: 'm', morse: [true, true] },
    { letter: 'n', morse: [true, false] },
    { letter: 'o', morse: [true, true, true] },
    { letter: 'p', morse: [false, true, true, false] },
    { letter: 'q', morse: [true, true, false, true] },
    { letter: 'r', morse: [false, true, false] },
    { letter: 's', morse: [false, false, false] },
    { letter: 't', morse: [true] },
    { letter: 'u', morse: [false, false, true] },
    { letter: 'v', morse: [false, false, false, true] },
    { letter: 'w', morse: [false, true, true] },
    { letter: 'x', morse: [true, false, false, true] },
    { letter: 'y', morse: [true, false, true, true] },
    { letter: 'z', morse: [true, true, false, false] },
  ];

  private FREQUENCIES = [
    { word: 'beats', frequency: '3.600' },
    { word: 'bistro', frequency: '3.552' },
    { word: 'bombs', frequency: '3.565' },
    { word: 'boxes', frequency: '3.535' },
    { word: 'break', frequency: '3.572' },
    { word: 'brick', frequency: '3.575' },
    { word: 'flick', frequency: '3.555' },
    { word: 'halls', frequency: '3.515' },
    { word: 'leaks', frequency: '3.542' },
    { word: 'shell', frequency: '3.505' },
    { word: 'slick', frequency: '3.522' },
    { word: 'steak', frequency: '3.582' },
    { word: 'sting', frequency: '3.592' },
    { word: 'strobe', frequency: '3.545' },
    { word: 'trick', frequency: '3.532' },
    { word: 'vector', frequency: '3.595' },
  ];

  private filteredFrequencies: { word: string, frequency: string }[] = [];

  private currentMorseLetter: boolean[] = [];
  private currentLetter = '';
  private word = '';

  private static arraysEqual(a, b): boolean {
    if (a === b) { return true; }
    if (a == null || b == null) { return false; }
    if (a.length !== b.length) { return false; }

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

  private onAddChar(isDash: boolean) {
    this.currentMorseLetter.push(isDash);
    this.checkLetter();
  }

  private onRevertChar() {
    this.currentMorseLetter.pop();
    this.checkLetter();
  }

  private onClearLetter() {
    this.currentMorseLetter = [];
    this.checkLetter();
  }

  private checkLetter() {
    const foundLetter = this.MORSE_CODE.find(letter => MorseComponent.arraysEqual(letter.morse, this.currentMorseLetter));
    this.currentLetter = !!foundLetter ? foundLetter.letter : 'notFound';
  }

  private onSaveLetter() {
    if (!!this.currentLetter) {
      this.word += (this.currentLetter);
    }

    this.onClearLetter();
    this.currentLetter = '';
    this.filterFrequencies();
  }

  private filterFrequencies() {
    this.filteredFrequencies = this.FREQUENCIES.slice().filter(el => el.word.startsWith(this.word));
  }

  private onPreviousLetter() {
    this.word = this.word.slice(0, -1);
    this.filterFrequencies();
    this.onClearLetter();
    this.currentLetter = '';
  }
}
