import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/Book';
import { NgModel } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bookId: Book;
  overview: string;

  constructor() {}

  ngOnInit() {
    this.overview = this.bookId['volumeInfo'].description.replace(
      /(<([^>]+)>)/gi,
      ''
    );
  }
}
