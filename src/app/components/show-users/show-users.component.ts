import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.css'
})
export class ShowUsersComponent implements OnInit {

  public username:string ="";
  public users$!:Observable<User[]>;

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.users$ =this.userService.getUsers();
      console.log(this.users$);
  }

  deleteUser(user:User){
    this.userService.deleteUser(user.username).subscribe(resp=>{
      alert("Korisnik uspesno obrisan.");
      window.location.reload();
    })
  }
}
