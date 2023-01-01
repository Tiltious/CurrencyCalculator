import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './main/create-account/create-account.component';
import { LoginComponent } from './main/login/login.component';
import { MainComponent } from './main/main.component';
import { AuthenticationGuard } from './main/shared/authentication.guard';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'newuser',component:CreateAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'edit',component:EditComponent,canActivate:[AuthenticationGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard]},
  {path: '', redirectTo: 'main', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
