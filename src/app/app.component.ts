import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Book Buddy';

  constructor(private router: Router){}

  ngOnInit() {
    
  }

  public isLogIn: boolean = (sessionStorage.getItem("guest") || sessionStorage.getItem("admin")) ? true : false;
  public admin: boolean = sessionStorage.getItem("admin") ? true : false;

  removeToken() {
    if (sessionStorage.getItem("guest")) {
      sessionStorage.removeItem("guest")
    }
    else {
      sessionStorage.removeItem("admin")
    }
    sessionStorage.clear();
    this.isLogIn = false;
    this.admin = false;
    this.router.navigate(["login"]);
  }
}

