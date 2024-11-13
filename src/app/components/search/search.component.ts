import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  
  authors: string[] = [];

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books=>{
      this.authors = Array.from(new Set(books.map(book=>book.author)));
    })
  }

  onAuthorSelect(author:string):void{
    window.location.href = `/books-by-author?author=${encodeURIComponent(author)}`;
  }
  
}
