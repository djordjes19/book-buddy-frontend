import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';
import { ReviewService } from '../../../services/review.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  book!: Book;
  reviewUsers: Map<number, User> = new Map();
  public adminLogin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private reviewService: ReviewService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('admin')) {
      this.adminLogin = true;
    }
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBookById(+id).subscribe((book) => (this.book = book));
    }

    // this.loadReviewUsers();
  }

  navigateToAddReview() {
    this.router.navigate(['/add-review', this.book.idBook]);
  }

  // loadReviewUsers() {
  //   if (this.book && this.book.reviews) {
  //     this.book.reviews.forEach((review) => {
  //       this.userService
  //         .getUserByReviewId(review.idReview)
  //         .subscribe((user) => {
  //           console.log(`User for review ${review.idReview}:`, user);
  //           this.reviewUsers.set(review.idReview, user);
  //         });
  //     });
  //   }
  // }
}
