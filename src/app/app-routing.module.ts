import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:id', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
