import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  inputValue = '';
  constructor(private toDoService: ToDoService) {}

  submitToDo() {
    this.toDoService.toDoBody.next(this.inputValue);
    this.inputValue = '';
  }
}
