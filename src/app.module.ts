import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EqualValidator } from './equal-validator.directive';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { MyService }  from './service/myservice';
import { DataService } from './service/dataservice';

import { AuthGuard } from './common/auth.guard';
import { CustomerHome } from './customerhome';
import { EmployeeHome } from './employeehome';
import { AdminHome } from './adminhome';
import { Login } from './login';
import { Signup } from './signup';
import { App } from './app';

import { routes } from './app.routes';

@NgModule({
  bootstrap: [App],
  declarations: [ AdminHome, CustomerHome,EmployeeHome, Login, Signup, App, EqualValidator ],
  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })],
  providers: [
    AuthGuard, ...AUTH_PROVIDERS, MyService, DataService
  ]
})
export class AppModule {}
