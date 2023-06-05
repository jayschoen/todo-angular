import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  toDoBody = new Subject();
  inputValue = '';
  constructor() {}
}
