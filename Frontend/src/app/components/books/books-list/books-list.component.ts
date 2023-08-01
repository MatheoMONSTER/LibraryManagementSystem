import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/books.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Books[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getAllBooks()
      .subscribe({
        next: (books) => {
          this.books = books;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
}
