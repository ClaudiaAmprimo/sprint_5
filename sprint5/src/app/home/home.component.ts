import { Component, inject} from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public stepsService = inject(StepsService);

  getDatos(){
    return this.stepsService.steps
  }
}
