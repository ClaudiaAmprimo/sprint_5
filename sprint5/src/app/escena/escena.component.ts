import { Component, Input } from '@angular/core';
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
  animationClass: string = '';

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.animationClass = 'slide-right';
      setTimeout(() => {
        this.currentStep++;
        this.animationClass = '';
      }, 500);
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.animationClass = 'slide-left';
      setTimeout(() => {
        this.currentStep--;
        this.animationClass = '';
      }, 500);
    }
  }

  handleClick() {
    if (this.currentStep === this.steps.length - 1) {
      this.prevStep();
    } else {
      this.nextStep();
    }
  }

  handleDots(index: number) {
    if (index > this.currentStep) {
      this.animationClass = 'slide-right';
    } else {
      this.animationClass = 'slide-left';
    }
    setTimeout(() => {
      this.currentStep = index;
      this.animationClass = '';
    }, 500);
  }
}
