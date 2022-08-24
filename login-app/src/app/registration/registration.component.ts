import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  username: String = '';
  password: String = '';
  confirmPassword: String = '';
  gender: String = '';
  country: String = '';
  msg: String = '';
  handleRegister() {
    //logic to store in db
    this.msg = 'Registration successfull.';
  }
  constructor() {}

  ngOnInit(): void {}
}
