import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  ngOnInit() {
    const LoginMai: HTMLInputElement | any = document.getElementById("LoginMai");
    LoginMai.focus();
  }

  SetFoc(eleNam: string): void {
    switch (eleNam) {
      case 'Mai':
        const LoginPaw: HTMLInputElement | any = document.getElementById("LoginPaw");
        LoginPaw.focus();
        break;

      case 'Paw':
        const LoginMai: HTMLInputElement | any = document.getElementById("LoginMai");
        LoginMai.focus();
        break;
    }
  }
  public Login_Send(): void {
    console.log("LoginSend");
    const LoginMai: HTMLInputElement | any = document.getElementById("LoginMai");
    LoginMai.focus();
  }

  public DoTab(event?: any): void {
    console.log(event);
  }
}


