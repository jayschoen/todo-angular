import {
  Component,
  OnInit,
} from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  toDoList: string[] = [];
  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.toDoBody.subscribe((res) => {
      this.createNewToDo(res);
    });
    this.toDoService.toDoList.subscribe((res) => {
      this.toDoList = res;
    });
  }

  createNewToDo(toDoInput: any) {
    this.toDoList.push(toDoInput);
    this.toDoService.toDoList.next(this.toDoList);
  }

  removeToDo(toDoId: number) {
    this.toDoList.splice(toDoId, 1);
    this.toDoService.toDoList.next(this.toDoList);
  }
}
