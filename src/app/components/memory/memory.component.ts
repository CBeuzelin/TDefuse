import { Component, OnInit } from '@angular/core';

interface MemoryStepInterface {
  toClick: { position: number, label: number };
  display: number;
  labels: number[];
}

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

  private memorySteps: MemoryStepInterface[] = [];
  currentStep: MemoryStepInterface;
  currentStepNumber = 0;
  nbPositions: number[] = Array(4).fill(0).map((x, i) => i);
  nbSteps: number[] = Array(5).fill(0).map((x, i) => i).reverse();
  positionToClick: number;

  constructor() { }

  ngOnInit() {
    this.resetCurrentStep();
    document.getElementById('input0').focus();

    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.nextStep();
      }
    });
  }

  private resetCurrentStep() {
    this.currentStep = { toClick: { position: null, label: null }, display: null, labels: [null, null, null, null] };
    this.positionToClick = null;
  }

  isValueCorrect(value: number) {
    if (!!value) {
      return new RegExp('^[1-4]$').test(value.toString());
    }
    return false;
  }

  isDuplicate(value: number) {
    return this.currentStep.labels.filter(el => el === value).length > 1;
  }

  onInputChange(event: any, position?: number) {
    const pattern = new RegExp('^[1-4]$');

    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^1-4]/g, '')[0];
      if (position >= 0) {
        this.currentStep.labels[position] = event.target.value === '' ? null : event.target.value;
      } else {
        this.currentStep.display = event.target.value === '' ? null : event.target.value;
      }
    }

    if (this.isValueCorrect(event.target.value)) {
      const nextEmptyInput = this.getNextEmptyInput();
      if (nextEmptyInput >= 0) {
        document.getElementById(`input${nextEmptyInput}`).focus();
      }
    }

    let allValuesCorrect = true;

    if (!this.isValueCorrect(this.currentStep.display)) {
      allValuesCorrect = false;
    } else {
      this.currentStep.labels.forEach(label => {
        if (!this.isValueCorrect(label) || this.isDuplicate(label)) {
          allValuesCorrect = false;
        }
      });
    }

    if (allValuesCorrect) {
      this.checkStep();
    } else {
      this.positionToClick = null;
    }
  }

  getNextEmptyInput(): number {
    if (!this.currentStep.display) {
      return 0;
    } else if (!this.currentStep.labels[0]) {
      return 1;
    } else if (!this.currentStep.labels[1]) {
      return 2;
    } else if (!this.currentStep.labels[2]) {
      return 3;
    } else if (!this.currentStep.labels[3]) {
      return 4;
    }

    return -1;
  }

  private checkStep() {
    switch (this.currentStepNumber) {
      case 0:
        switch (this.currentStep.display) {
          case 1:
          case 2:
            this.positionToClick = 1;
            break;
          case 3:
            this.positionToClick = 2;
            break;
          case 4:
            this.positionToClick = 3;
            break;
        }
        break;

      case 1:
        switch (this.currentStep.display) {
          case 1:
            this.positionToClick = this.currentStep.labels.indexOf(4);
            break;
          case 2:
          case 4:
            this.positionToClick = this.memorySteps[0].toClick.position;
            break;
          case 3:
            this.positionToClick = 0;
            break;
        }
        break;

      case 2:
        switch (this.currentStep.display) {
          case 1:
            this.positionToClick = this.currentStep.labels.indexOf(this.memorySteps[1].toClick.label);
            break;
          case 2:
            this.positionToClick = this.currentStep.labels.indexOf(this.memorySteps[0].toClick.label);
            break;
          case 3:
            this.positionToClick = 2;
            break;
          case 4:
            this.positionToClick = this.currentStep.labels.indexOf(4);
            break;
        }
        break;

      case 3:
        switch (this.currentStep.display) {
          case 1:
            this.positionToClick = this.memorySteps[0].toClick.position;
            break;
          case 2:
            this.positionToClick = 0;
            break;
          case 3:
          case 4:
            this.positionToClick = this.memorySteps[1].toClick.position;
            break;
        }
        break;

      case 4:
        switch (this.currentStep.display) {
          case 1:
            this.positionToClick = this.currentStep.labels.indexOf(this.memorySteps[0].toClick.label);
            break;
          case 2:
            this.positionToClick = this.currentStep.labels.indexOf(this.memorySteps[1].toClick.label);
            break;
          case 3:
            this.positionToClick = this.currentStep.labels.indexOf(this.memorySteps[3].toClick.label);
            break;
          case 4:
            this.positionToClick = this.currentStep.labels.indexOf(this.memorySteps[2].toClick.label);
            break;
        }
        break;
    }
  }

  firstStep() {
    this.memorySteps = [];
    this.resetCurrentStep();
    this.currentStepNumber = 0;
  }

  nextStep() {
    if (this.positionToClick !== null) {
      this.currentStep.toClick = { position: this.positionToClick, label: this.currentStep.labels[this.positionToClick] };
      this.memorySteps.push(this.currentStep);
      this.resetCurrentStep();
      this.currentStepNumber += 1;
      document.getElementById('input0').focus();
    }
  }
}
