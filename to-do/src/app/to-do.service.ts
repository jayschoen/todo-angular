import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  toDoBody = new Subject();
  inputValue = '';

  toDoList = new BehaviorSubject<string[]>(['one thing', 'and another', 'once more for the kids watching at home']);
  constructor() {}
}
