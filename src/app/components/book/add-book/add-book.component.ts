import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../model/book';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit{

  public book:Book = new Book();

  constructor(private bookService:BookService, private router: Router){}

  ngOnInit(): void {
      
  }

  addBook(bookForm:{invalid:any;}){
    if(bookForm.invalid){
      alert("INvalid form");
    
    }else{
      this.bookService.addBook(this.book).subscribe(resp=>{
        alert("Uspesno dodata knjiga");
        console.log(this.book.title);
        this.router.navigate(['/books']); //nakon dodavanja idemo na sve knjige 
      })
    }
  }
}
