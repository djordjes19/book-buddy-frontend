import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  BACKEND_BASE = "http://localhost:8080/api/";
  
  constructor(private http:HttpClient) { }
}
