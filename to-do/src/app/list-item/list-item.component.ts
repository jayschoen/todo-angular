import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() toDoText: string = "";
  @Input() itemIndex: number = 0;

  @Output() deleteToDoEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    console.log(this.toDoText)
  }

  deleteToDo(index: number) {
    console.log('item indexxxx', index)
    this.deleteToDoEvent.emit(index)
  }
}
