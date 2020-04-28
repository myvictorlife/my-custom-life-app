import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthApiService } from 'src/app/services/http-request/auth/auth-api.service';
import { AnalyticsService } from 'src/app/services/wrappers/analytics/analytics.service';
import { AppConstants } from 'src/constants/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

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
  public appConstants = AppConstants;
  constructor(
    public authService: AuthApiService,
    public analyticsService: AnalyticsService,
    ) {
    this.initForm();
   }

  public ngAfterViewInit() {
    this.analyticsService.logPage(this.appConstants.PAGES_NAMES.LOGIN_PAGE)
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
    const { email, password } = this.loginForm.getRawValue();
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
