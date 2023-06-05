import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  toDoBody = new Subject();
  inputValue = '';

  toDoList = new BehaviorSubject<string[]>(['kill thanos', 'solve world hunger', 'figure out how humanity can survive on mars']);
  constructor() {}
}
