import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: String = '';
  public submitResult: String = '';
  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.submitResult = 'success';
    this.userName = '';
  }

  public isUserNameValid(): boolean {
    return this.userName.length > 0;
  }
}
