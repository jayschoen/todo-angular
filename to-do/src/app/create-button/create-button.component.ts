import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss'],
})
export class CreateButtonComponent {
  constructor(private toDoService: ToDoService) {}

  submitToDo() {
    console.log('BOO BITCH~~')
  }
}
