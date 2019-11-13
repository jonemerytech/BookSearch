import { Component, OnInit, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookComponent implements OnInit {
  id: string;
  book: any;
  title: string;
  poster: string;
  pageCount: number;
  date: string;
  overview: string;
  author: any;
  cats: any;
  stars: number;
  listPrice: number;
  retailPrice: number;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.bookService.getBookById(this.id).subscribe(res => {
      this.book = res;
      console.log(this.book);
      this.title = this.book.volumeInfo.title;
      this.poster = this.book.volumeInfo.imageLinks.thumbnail;
      this.pageCount = this.book.volumeInfo.printedPageCount;
      this.date = this.book.volumeInfo.publishedDate;
      this.overview = this.book.volumeInfo.description.replace(
        /(<([^>]+)>)/gi,
        ''
      );
      this.author = this.book.volumeInfo.authors;
      this.cats = this.book.volumeInfo.categories;
      this.stars = this.book.volumeInfo.averageRating;
      this.listPrice = this.book.saleInfo.listPrice.amount;
      this.retailPrice = this.book.saleInfo.retailPrice.amount;
    });
  }
}
