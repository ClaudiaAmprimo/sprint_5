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

  handleClick() {
    console.log('Icon button clicked');
  }
}
