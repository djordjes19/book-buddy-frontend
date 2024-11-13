import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  // login(){
  //   this.userService.login(this.username, this.password).subscribe((resp:any)=>{
  //     if(resp.username == ""){
  //       alert("Pogresno korisnicko ime ili lozinka.")
  //     }else{

  //       if(resp.iduserType ==2 ){
  //         sessionStorage.setItem("name", resp.name)
  //         sessionStorage.setItem("email", resp.email)
  //         sessionStorage.setItem("token", resp.username)

  //       }else{
  //         sessionStorage.setItem("admin", resp.username)

  //       }
  //       this.router.navigate(['/books']).then(()=>{
  //         window.location.reload();
  //       });
  //     }
  //   })
  // }

  login() {
    this.userService
      .login(this.username, this.password)
      .subscribe((resp: any) => {
        console.log('To je to: ', resp); // Check if resp contains idUserType
        if (resp.username == '') {
          alert('Pogrešno korisničko ime ili lozinka.');
        } else {
          const user = {
            idUser: resp.idUser,
            name: resp.name,
            email: resp.email,
            username: resp.username,
            userType: resp.idUserType,
          };

          if (resp.idUserType == 2) {
            sessionStorage.setItem('guest', JSON.stringify(user));
          } else {
            sessionStorage.setItem('admin', JSON.stringify(user));
          }

          this.router.navigate(['/books']).then(() => {
            window.location.reload();
          });
        }
      });
  }
}
