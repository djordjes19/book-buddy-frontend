import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookItemComponent } from '../book/book-item/book-item.component';
import { Book } from '../../model/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-booksbyauthor',
  standalone: true,
  imports: [FormsModule, CommonModule, BookItemComponent],
  templateUrl: './booksbyauthor.component.html',
  styleUrl: './booksbyauthor.component.css'
})
export class BooksbyauthorComponent implements OnInit {

  books: Book[] = [];
  author: string | null = null;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.author = params['author'] || null;
      if (this.author) {
        this.bookService.getBooksByAuthor(this.author).subscribe(books => {
          this.books = books;
        });
      }
    });
  }

}
