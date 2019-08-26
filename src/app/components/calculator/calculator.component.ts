import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  firstStepCol = Array(2).fill(0).map((x, i) => i);
  firstStepRow = Array(3).fill(0).map((x, i) => i);

  WORD_LIST = [
    '',      // 0
    'blank',    // 1
    'c',        // 2
    'cee',      // 3
    'display',  // 4
    'done',     // 5
    'first',    // 6
    'hold',     // 7
    'hold on',  // 8
    'lead',     // 9
    'led',      // 10
    'leed',     // 11
    'left',     // 12
    'like',     // 13
    'middle',   // 14
    'next',     // 15
    'no',       // 16
    'nothing',  // 17
    'okay',     // 18
    'press',    // 19
    'read',     // 20
    'ready',    // 21
    'red',      // 22
    'reed',     // 23
    'right',    // 24
    'says',     // 25
    'see',      // 26
    'sure',     // 27
    'their',    // 28
    'there',    // 29
    'they are', // 30
    'they\'re', // 31
    'u',        // 32
    'uh huh',   // 33
    'uh uh',    // 34
    'uhhh',     // 35
    'ur',       // 36
    'wait',     // 37
    'what',     // 38
    'what?',    // 39
    'yes',      // 40
    'you',      // 41
    'you are',  // 42
    'you\'re',  // 43
    'your',     // 44
  ];

  FIRST_STEP = [
    { word: 0, position: [0, 2] }, { word: 1, position: [1, 1] }, { word: 2, position: [1, 0] },
    { word: 3, position: [1, 2] }, { word: 4, position: [1, 2] }, { word: 6, position: [1, 0] },
    { word: 8, position: [1, 2] }, { word: 9, position: [1, 2] }, { word: 10, position: [0, 1] },
    { word: 11, position: [0, 2] }, { word: 16, position: [1, 2] }, { word: 17, position: [0, 1] },
    { word: 18, position: [1, 0] }, { word: 20, position: [1, 1] }, { word: 22, position: [1, 1] },
    { word: 23, position: [0, 2] }, { word: 25, position: [1, 2] }, { word: 26, position: [1, 2] },
    { word: 28, position: [1, 1] }, { word: 29, position: [1, 2] }, { word: 30, position: [0, 1] },
    { word: 31, position: [0, 2] }, { word: 36, position: [0, 0] }, { word: 40, position: [0, 1] },
    { word: 41, position: [1, 1] }, { word: 42, position: [1, 2] }, { word: 43, position: [1, 1] },
    { word: 44, position: [1, 1] }
  ];

  SECOND_STEP = [
    { mainWord: 1, wordList: [37, 24, 18, 14, 1] },
    { mainWord: 5, wordList: [27, 33, 15, 39, 44, 36, 43, 7, 13, 41, 32, 42, 43, 5] },
    { mainWord: 6, wordList: [12, 18, 40, 14, 16, 24, 17, 35, 37, 21, 1, 38, 19, 6] },
    { mainWord: 7, wordList: [42, 32, 5, 43, 41, 36, 27, 39, 43, 15, 7] },
    { mainWord: 12, wordList: [24, 12] },
    { mainWord: 13, wordList: [43, 15, 32, 36, 7, 5, 43, 39, 33, 41, 13] },
    { mainWord: 14, wordList: [1, 21, 18, 38, 17, 19, 16, 37, 12, 14] },
    { mainWord: 15, wordList: [39, 33, 43, 44, 7, 27, 15] },
    { mainWord: 16, wordList: [1, 35, 37, 6, 38, 21, 24, 40, 17, 12, 19, 18, 16] },
    { mainWord: 17, wordList: [35, 24, 18, 14, 40, 1, 16, 19, 12, 38, 37, 6, 17] },
    { mainWord: 18, wordList: [14, 16, 6, 40, 35, 17, 37, 18] },
    { mainWord: 19, wordList: [24, 14, 40, 21, 19] },
    { mainWord: 21, wordList: [40, 18, 38, 14, 12, 19, 24, 1, 21] },
    { mainWord: 24, wordList: [40, 17, 21, 19, 16, 37, 38, 24] },
    { mainWord: 27, wordList: [42, 5, 13, 43, 41, 7, 33, 36, 27] },
    { mainWord: 32, wordList: [33, 27, 15, 39, 43, 36, 43, 5, 32] },
    { mainWord: 33, wordList: [33] },
    { mainWord: 34, wordList: [36, 32, 42, 43, 15, 43] },
    { mainWord: 35, wordList: [21, 17, 12, 38, 18, 40, 24, 16, 19, 1, 35] },
    { mainWord: 36, wordList: [5, 32, 36] },
    { mainWord: 37, wordList: [35, 16, 1, 18, 40, 12, 6, 19, 38, 37] },
    { mainWord: 39, wordList: [41, 7, 43, 44, 32, 5, 43, 13, 42, 33, 36, 15, 39] },
    { mainWord: 38, wordList: [35, 38] },
    { mainWord: 40, wordList: [18, 24, 35, 14, 6, 38, 19, 21, 17, 40] },
    { mainWord: 42, wordList: [44, 15, 13, 33, 39, 5, 43, 7, 41, 32, 43, 27, 36, 42] },
    { mainWord: 43, wordList: [41, 43] },
    { mainWord: 41, wordList: [27, 42, 44, 43, 15, 33, 36, 7, 39, 41] },
    { mainWord: 44, wordList: [43, 42, 33, 44] },
  ];

  listToDisplay: number[];

  constructor() { }

  ngOnInit() {
  }

  onClickButton(index: number) {
    this.listToDisplay = this.SECOND_STEP[index].wordList;
  }

}
