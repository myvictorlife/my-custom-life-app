import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthApiService } from 'src/app/services/http-request/auth/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message: 'Login.ErrorEmailRequired' },
      { type: 'pattern', message: 'Login.ErrorEmailRequired' }
    ],
    password: [
      { type: 'required', message: 'Login.PasswordIsRequired' },
      { type: 'minlength', message: 'Login.ErrorPasswordMustBeAtLeast' }
    ]
  };
  constructor(public authService: AuthApiService) {
    this.initForm();
   }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  ngOnInit() {
  }

  doLogin() {
    const email = this.loginForm.controls.email.value,
        password = this.loginForm.controls.password.value;
    try {
     const response = this.authService.postLogin({
       loader: [true],
       email, password
     });
     // add localStorage
     console.log(response);
    } catch(e) {
      console.warn('LoginPage (login): ', e);
    }
  }

}
