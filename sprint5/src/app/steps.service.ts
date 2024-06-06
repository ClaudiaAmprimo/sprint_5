import { Injectable } from '@angular/core';
import { IStep } from './i-step';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  steps: IStep[] =[
    {
      title: 'Dedica muchas horas',
      descripcion: 'Al menos 30 horas a la semana. Si no tienes suficiente, tendrás que dedicarle más horas. Al principio parece imposible, pero notarás una mejoría rápidamente.',
      img: 'assets/time_managment.svg',
      bgcolor: '#009a92'
     },
     {
      title: 'Programa proyectos propios:',
      descripcion: 'Más vale 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudará a acelerar tu aprendizaje.',
      img: 'assets/programming.svg',
      bgcolor: '#cdcdcd'
     },
     {
      title: 'Procura descansar:',
      descripcion: 'Descansar bien y desconectar son vitales. De esta forma reducirás el estrés y la ansiedad. Mejorarás tu concentración y afianzarás tu aprendizaje.',
      img: 'assets/meditation.svg',
      bgcolor: '#ffc249'
     }
]
  constructor() { }

  getSteps(): IStep[] {
    return this.steps;
  }
}
