import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { BooksService } from 'src/app/Services/BooksService/books.service';
@Component({
  selector: 'app-bookholder',
  templateUrl: './bookholder.component.html',
  styleUrls: ['./bookholder.component.css'],
})
export class BookholderComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.GetBooks();
  }
}
