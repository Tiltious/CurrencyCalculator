import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  template: `<div class="container-fluid ">
                <div class="row">
                    <app-nav-menu></app-nav-menu>
                </div>
                <div class="row">
                    <h1 class="text-center mt-2">Welcome!</h1>
                    <app-calculator></app-calculator>
                </div>
            </div>`,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userservice:UserServiceService) {}

  ngOnInit(): void {}
  hidden:boolean=false;
}
