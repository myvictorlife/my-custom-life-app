import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AuthApiService } from '../../services/http-request/auth/auth-api.service';
import { LoadingService } from '../../services/wrappers/loading/loading.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthApiService,
    LoadingService
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
