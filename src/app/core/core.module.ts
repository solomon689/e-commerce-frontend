import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [
    CookieService,
  ]
})
export class CoreModule { }
