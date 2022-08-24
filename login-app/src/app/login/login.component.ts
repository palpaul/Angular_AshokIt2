import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';
  msg: String = '';
  checkLogin() {
    if (this.username == 'Rahul' && this.password == 'Rahul@123') {
      this.msg = 'Login Success';
    } else this.msg = 'Invalid Userid or Password';
  }
  //
  constructor() {}
  ngOnInit(): void {}
}
