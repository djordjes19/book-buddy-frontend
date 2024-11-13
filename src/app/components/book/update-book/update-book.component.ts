import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../model/book';
import { BookItemComponent } from '../book-item/book-item.component';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, CommonModule,BookItemComponent],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit{


  public author:string='';
  public title:string='';
  public photo:string='';
  public rating:number=0.0;
  public publishedYear:number = 0;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.title = params['title'];

      

    })
      
  }
  updateBook(){
    this.bookService.updateBook( this.title, this.author, this.publishedYear, this.rating, this.photo).subscribe(resp=>{

      if(resp==true){
        console.log("Azuriranje uspelo");
        this.router.navigate(['/books']);
      }else{
        alert("Azuriranje nije uspelo")
      }
    })
  }
}


