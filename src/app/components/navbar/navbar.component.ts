import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  book = {
    searchTerm: ''
  };

  books = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {}

  search() {
    this.bookService.searchBook().subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      this.books = res['items']['volumeInfo'];
    });
  }
}
