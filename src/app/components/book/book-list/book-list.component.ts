import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from '../../../model/book';
import { BookService } from '../../../services/book.service';
import { BookItemComponent } from '../book-item/book-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule, CommonModule, BookItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  public books$!: Observable<Book[]>;

  public isLogIn: boolean = false;
  public adminLogin: boolean = false;

  constructor(private bookService: BookService, private router: Router) {}

  private lista: Book[] = [];

  ngOnInit(): void {
    if (sessionStorage.getItem('guest')) {
      this.isLogIn = true;
    }
    if (sessionStorage.getItem('admin')) {
      this.adminLogin = true;
    }
    this.books$ = this.bookService.getBooks();

    this.books$.subscribe((r) => {
      this.lista = r;
    });
  }

  navigateToAddBook(): void {
    this.router.navigate(['/add-book']);
  }
}
