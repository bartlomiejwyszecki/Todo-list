import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskName: string = 'Domyślna wartość';
  taskDate: string = '';
  config: { [key: string]: string | Date };
  editMode: boolean = false;

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
    };
    this.sortTasks();
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.sortTasks();
  }

   private sortTasks() {
     this.tasks = this.tasks.sort((a: Task, b: Task) => 
       a.done === b.done ? 0 : a.done ? 1 : -1
     );
   }
}
