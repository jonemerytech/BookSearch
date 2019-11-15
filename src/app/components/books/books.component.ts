import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookId: any = {
    id: 0,
    title: '',
    thumbnail: '',
    authors: [],
    stars: 0,
    overview: '',
    pageCount: 0,
    publishDate: new Date(),
    categories: [],
    listPrice: 0,
    retailPrice: 0
  };

  p = 0;
  totalItems: number;

  books: Book[];

  constructor(
    private bookService: BookService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {}

  ngOnInit() {
    this.spinnerService.show();
    this.bookService.getBooks(this.p).subscribe(res => {
      this.totalItems = res['totalItems'];
      this.books = res['items'];

      this.spinnerService.hide();
    });
  }

  searchBooks(searchTerm) {
    this.bookId.id = 0;
    this.spinnerService.show();
    this.bookService.searchBooks(searchTerm).subscribe(res => {
      this.books = res['items'];
      this.spinnerService.hide();
    });
  }

  getBookById(id) {
    this.spinnerService.show();
    this.bookService.getBookById(id).subscribe(res => {
      this.bookId = res;
      console.log('book', this.bookId);
      this.spinnerService.hide();
    });
  }

  pageChange(e) {
    this.spinnerService.show();
    this.p = e;
    this.bookService.getBooks(this.p).subscribe(res => {
      this.totalItems = res['totalItems'];
      this.books = res['items'];
      console.log(this.books, this.totalItems);

      this.spinnerService.hide();
    });
  }
}
