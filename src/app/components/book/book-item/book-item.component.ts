import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../model/book';
import { BookService } from '../../../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
})
export class BookItemComponent implements OnInit {
  @Input() book: Book = new Book();

  public isLogin: boolean = false;
  public adminLogin: boolean = false;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('guest')) {
      this.isLogin = true;
    }
    if (sessionStorage.getItem('admin')) {
      this.adminLogin = true;
    }
    console.log(this.book.title);
    console.log(sessionStorage.getItem('admin'));
  }

  deleteBook(title: string) {
    this.bookService.deleteBook(title).subscribe((resp: boolean) => {
      if (resp == true) {
        console.log('Knjiga je izbrisana');
        window.location.reload();
      }
    });
  }

  navigateToBookDetail() {
    this.router.navigate(['/book-detail', this.book.idBook]);
  }
}
