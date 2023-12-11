import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent {
  books: any
  constructor(private base: BaseService) {
    this.base.getBooks().subscribe(
      (res) => this.books = res
    )
    console.log(this.books)
  }
  deleteBook(book: any) {
    this.base.deleteBook(book);
  }
  putBook(book: any) {
    this.base.putBook(book)
  }

}
