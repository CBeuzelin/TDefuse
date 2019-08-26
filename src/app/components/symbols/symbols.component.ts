import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.scss']
})
export class SymbolsComponent implements OnInit {

  private validationTable = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 1, 7, 9, 10, 6, 11],
    [12, 13, 9, 14, 15, 3, 10],
    [16, 17, 18, 5, 14, 11, 19],
    [20, 19, 18, 21, 17, 22, 23],
    [16, 8, 24, 25, 20, 26, 27],
  ];

  symbols = Array(27).fill(0).map((x, i) => i);
  selectedSymbols: number[] = [];
  orderedSelectedSymbols: number[] = [];
  orderFound: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClickSymbol(symbol: number) {
    if (this.selectedSymbols.includes(symbol)) {
      this.selectedSymbols.splice(this.selectedSymbols.indexOf(symbol), 1);
      this.orderedSelectedSymbols = [];
    } else {
      if (this.selectedSymbols.length < 4) {
        this.selectedSymbols.push(symbol);

        let correctColumn;

        if (this.selectedSymbols.length === 4) {

          this.orderFound = false;
          for (let i = 0; i < this.validationTable.length; i++) {
            if (this.arrayContainsArray(this.validationTable[i], this.selectedSymbols)) {
              correctColumn = i;
              this.orderFound = true;
              break;
            }
          }

          if (this.orderFound) {
            this.orderedSelectedSymbols = this.selectedSymbols.slice().sort((a: number, b: number) => {
              return this.validationTable[correctColumn].indexOf(a) - this.validationTable[correctColumn].indexOf(b);
            });
          }
        }
      }
    }
  }

  private arrayContainsArray(superset, subset): boolean {
    if (subset.length === 0) {
      return false;
    }
    return subset.every(value => {
      return (superset.indexOf(value) >= 0);
    });
  }

  resetList() {
    this.selectedSymbols = [];
    this.orderedSelectedSymbols = [];
  }
}
