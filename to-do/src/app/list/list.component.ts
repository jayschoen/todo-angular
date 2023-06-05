import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  toDoList: string[] = []
  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.toDoBody.subscribe(
      (res) => {
        this.createNewToDo(res)
      }
    );
  }

  createNewToDo(toDoInput: any) {
    this.toDoList.push(toDoInput);
  }
}
