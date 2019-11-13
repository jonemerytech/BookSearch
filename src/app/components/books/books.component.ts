import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  book = {
    searchTerm: ''
  };

  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.searchBook().subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      this.books = res['items'];
      console.log(this.books);
    });
  }
}
