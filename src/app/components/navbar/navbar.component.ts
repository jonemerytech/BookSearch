import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() searchBooks: EventEmitter<any> = new EventEmitter();

  book = {
    searchTerm: ''
  };

  constructor() {}

  ngOnInit() {}

  search() {
    this.searchBooks.emit(this.book.searchTerm);
  }
}
