import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Review } from '../../../model/review';
import { ReviewService } from '../../../services/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent implements OnInit {
  
  // review!: Review ;

  // private idBook!:number;
  // private idUser!:number;

   idBook!: number;
  reviewText!: string;
  daterev!: string;

  constructor(
    private reviewService:ReviewService,
    private router: Router,
    private route: ActivatedRoute 
  ){}

  
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.idBook = +id;
    }
  }

  submitReview(): void {
  // Dohvatanje JSON stringa iz sessionStorage
  const userString = sessionStorage.getItem('admin');
  
  if (userString) {
    // Deserijalizacija JSON stringa u objekat
    const user = JSON.parse(userString);

    // Provera da li objekat ima idUser
    const idUser = parseInt(user.idUser);
    // console.log(idUser);
    

    // Kreiranje recenzije
    const review = {daterev: new Date().toISOString(), text: this.reviewText, idBook: this.idBook, idUser: idUser };

    // Slanje recenzije preko servisa
    this.reviewService.addReview(review).subscribe(() => {
      this.router.navigate(['/book-detail', this.idBook]); // Navigacija nazad na detalje knjige
    });
  } else {
    // Ako korisnički objekat nije pronađen u sessionStorage
    console.error('User not found in sessionStorage');
  }
}






}
