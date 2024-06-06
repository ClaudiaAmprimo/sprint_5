import { Component, Input, inject } from '@angular/core';
import { IStep } from '../i-step';
import { StepsService } from '../steps.service';


@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
  @Input() steps: IStep[] = [];
}
