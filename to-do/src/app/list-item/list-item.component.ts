import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() toDoText: string = "";

  constructor() {}

  ngOnInit() {
    console.log(this.toDoText)
  }
}
