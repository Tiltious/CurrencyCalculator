import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './main/create-account/create-account.component';
import { LoginComponent } from './main/login/login.component';
import { MainComponent } from './main/main.component';
import { AuthenticationGuard } from './main/shared/authentication.guard';
import { EditComponent } from './edit/edit.component';
import { AuthorizationGuard } from './main/shared/authorization.guard';
import { AddNewCurrencyComponent } from './edit/add-new-currency/add-new-currency.component';

export const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'newuser',component:CreateAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'edit',component:EditComponent,canActivate:[AuthenticationGuard,AuthorizationGuard]},
  {path:'newcurr',component:AddNewCurrencyComponent,canActivate:[AuthenticationGuard,AuthorizationGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard]},
  {path: '', redirectTo: 'main', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
