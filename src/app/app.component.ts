import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: { [key: string]: string | Date };
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-02-10',
      done: false
    },
    {
      name: 'Nauka programowania',
      deadline: '2020-02-28',
      done: false
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-02-14',
      done: false
    }
  ];

  constructor () {
    this.config = {
      title: 'Lista zadań',
      footer: '@ Lista zadań. Przykładowa aplikacja angular',
      date: new Date()
    }
  }
}
