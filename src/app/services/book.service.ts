import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiKey = environment.APIKEY;
  constructor(private http: HttpClient) {}

  searchBook() {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=stephen king&key=${this.apiKey}&maxResults=20`
    );
  }

  getBookById(id: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
  }
}
