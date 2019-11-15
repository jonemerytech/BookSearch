import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiKey = environment.APIKEY;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getBooks(page: number) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=stephen king&key=${this.apiKey}&maxResults=20&startIndex=${page}`
    );
  }

  getBookById(id: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
  }

  searchBooks(searchTerm: string) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${this.apiKey}&maxResults=20`
    );
  }
}
