import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../model/review';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  BACKEND_BASE = "http://localhost:8080/api/";


  constructor(private http:HttpClient) { }

  addReview(review:any):Observable<any>{
    return this.http.post(this.BACKEND_BASE + "addReview",review);
  }

  reviewsFromBook(book: Book): Observable<Review[]> {
    return this.http.post<Review[]>(this.BACKEND_BASE + "reviewsFromBook", book);
  }
  
}
