import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  BACKEND_BASE = "http://localhost:8080/api/";

  constructor(private http: HttpClient){}

  getBookImage(id: number): Observable<string> {
    const url = `${this.BACKEND_BASE}image/${id}`;  // URL za dohvat slike knjige po ID-u
    return this.http.get<string>(url);  // Vraća URL slike kao string
  }

  deleteBook(title:string):Observable<any>{
    let params  = new HttpParams().set("title",title)
    return this.http.post(this.BACKEND_BASE + "deleteBook",params);
  }

  updateBook(title:string, author:string, publishedYear:number, rating:number,photo:string ):Observable<any>{
    let params = new HttpParams()
    .set("title",title)
    .set("photo",photo)
    .set("author",author)
    .set("publishedYear", publishedYear)
    .set("rating",rating);

    return this.http.post(this.BACKEND_BASE + "updateBook",params);
  }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.BACKEND_BASE + "allBooks")
  }

  addBook(bookForm: Book):Observable<Book>{
    let params = new HttpParams()
    .set("title", bookForm.title)
    .set("photo",bookForm.photo)
    .set("author",bookForm.author)
    .set("publishedYear",bookForm.publishedYear)
    .set("rating", bookForm.rating);

    return this.http.post<Book>(this.BACKEND_BASE + "addBook", params);

  }

  getBookByTitle(title:string):Observable<Book>{
    let params = new HttpParams().set("title", title);
    return this.http.get<Book>(this.BACKEND_BASE + "getBookByTitle",{params})
  }

  getBooksByAuthor(author: string): Observable<Book[]> {
    let params = new HttpParams().set("author", author);
    return this.http.get<Book[]>(this.BACKEND_BASE + "booksByAuthor", { params });
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.BACKEND_BASE}${id}`);
    
  }

  

  



}
