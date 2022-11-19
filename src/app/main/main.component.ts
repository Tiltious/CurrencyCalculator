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
    this.userservice.getUsers().subscribe(
      (usersobs:any)=>{
        this.users.splice(0);
        for (const index in usersobs) {
        let user = new User(index,usersobs[index].username,usersobs[index].email,usersobs[index].password);
        //this.users.push(user);
        this.users.push(user);
        }});
  }

}
