import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() sendId: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  send(id) {
    this.sendId.emit(id);
  }
}
