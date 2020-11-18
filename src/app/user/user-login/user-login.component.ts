import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  message = '';
  username = '';
  password = '';
  user: User = null;

  constructor(private userSvc: UserService,
              private sysSvc: SystemService,
              private router: Router) { }

  ngOnInit(): void {
    // default username/password so we don't have to login everytime while testing
    this.username = 'sblessing';
    this.password = 'login';
    this.sysSvc.loggedInUser = null;  // clear out logged in user
  }

  login() {
    console.log('in login method...');
    this.userSvc.login(this.username, this.password).subscribe(
      res => {
        console.log('login()... ', res);
          // successful login
        this.user = res as User;
        this.sysSvc.loggedInUser = this.user;
        this.router.navigateByUrl('/home');
      },
      err =>
        {
          console.log('error... ', err);
          // login error... display in message
          this.message = 'invalid login';
        }
    );
  }
}
