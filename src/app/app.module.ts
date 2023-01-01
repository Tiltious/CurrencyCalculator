import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/login/login.component';
import { CreateAccountComponent } from './main/create-account/create-account.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationService } from './main/shared/authentication.service';
import { AuthenticationGuard } from './main/shared/authentication.guard';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { NavMenuComponent } from './dashboard/nav-menu/nav-menu.component';
import { CalculatorComponent } from './dashboard/calculator/calculator.component';
import { CurrencyService } from './currency.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    CreateAccountComponent,
    DashboardComponent,
    NavMenuComponent,
    CalculatorComponent,
    EditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService,AuthenticationService,AuthenticationGuard,CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
