import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  private PASSWORDS = [
    'about', 'after', 'again', 'below', 'could',
    'every', 'first', 'found', 'great', 'house',
    'large', 'learn', 'never', 'other', 'place',
    'plant', 'point', 'right', 'small', 'sound',
    'spell', 'still', 'study', 'their', 'there',
    'these', 'thing', 'think', 'three', 'water',
    'where', 'which', 'world', 'would', 'write'
  ];

  lettersPropositions = [[], [], [], [], []];
  possiblePasswords = this.PASSWORDS;
  letters = [[], [], [], [], []];

  constructor() { }

  ngOnInit() {
    this.PASSWORDS.forEach((password) => {
      for (let j = 0; j < 5; j += 1) {
        if (!this.lettersPropositions[j].includes(password[j])) {
          this.lettersPropositions[j].push(password[j]);
        }

        this.lettersPropositions[j].sort();
      }
    });
  }

  selectLetter(rowNumber: number, letter: string) {

    if (this.letters[rowNumber].includes(letter)) {
      this.letters[rowNumber].splice(this.letters[rowNumber].indexOf(letter), 1);
    } else {
      this.letters[rowNumber].push(letter);
    }

    this.filterPassword();
  }

  private filterPassword() {
    this.possiblePasswords = this.PASSWORDS.map(word => {
      let wordMatching = true;
      this.letters.forEach((letterRow, index) => {
        if (letterRow.length && !letterRow.includes(word[index])) {
          wordMatching = false;
        }
      });

      if (wordMatching) {
        return word;
      }

      return '';
    });
  }

  resetList() {
    this.possiblePasswords = this.PASSWORDS;
    this.letters = [[], [], [], [], []];
  }

  resetRow(rowNumber: number) {
    this.letters[rowNumber] = [];
    this.filterPassword();
  }
}
