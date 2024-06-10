import { Component, Input, inject } from '@angular/core';
import { IStep } from '../i-step';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
  @Input() steps: IStep[] = [];
  currentStep: number = 0;
  isReversing: boolean = false;

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  handleClick() {
    if (this.isReversing) {
      this.prevStep();
      if (this.currentStep === 0) {
        this.isReversing = false;
      }
    } else {
      this.nextStep();
      if (this.currentStep === this.steps.length - 1) {
        this.isReversing = true;
      }
    }
  }

  handleDots(index: number) {
    this.currentStep = index;
    this.isReversing = this.currentStep === this.steps.length - 1;
  }
}
