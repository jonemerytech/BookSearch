import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from 'angular-notifier';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, NavbarComponent, BookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StarRatingModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'middle'
        },
        vertical: {
          position: 'top'
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
