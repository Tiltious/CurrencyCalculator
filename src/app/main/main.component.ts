import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users:any=[];
  constructor(private userservice:UserServiceService, private router:Router ) { }
  hidden:boolean=true;
  ngOnInit(): void {
    localStorage.clear();
    this.getUsers();
  }
  showForms(event:any){
    this.router.navigate([event.target.id]);
    console.log(event.target.id);
  }
  onDelete(user_id:any,index:any){
    this.userservice.deleteUser(user_id,index).subscribe(
      ()=>{
        this.users.splice(index,1);
      }
    );
  }
  getUsers(){
    this.userservice.getUsersApi().subscribe(
      (usersobs:any)=>{
        this.users.splice(0);
        for (const element of usersobs) {
        let user = new User(element._id,element.username,element.email,element.password);
        this.users.push(user);
        }});
  }

}
