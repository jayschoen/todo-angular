import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  toDoBody = new BehaviorSubject("");
  inputValue = '';
  constructor() {}
}
