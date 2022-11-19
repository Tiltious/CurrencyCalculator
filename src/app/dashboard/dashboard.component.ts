import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userservice:UserServiceService) {}
  ngOnInit(): void { this.getUsers();
  }
  onDelete(user_id:any,index:any){
    this.userservice.deleteUser(user_id,index).subscribe(
      ()=>{this.users.splice(index,1);}
    );
  }
  hidden:boolean=false;
  users:any=[];  
  activeUser:any={}; 
  getUsers(){
    this.userservice.getUsers().subscribe(
      (usersobs:any)=>{
        this.users.splice(0);
        for (const index in usersobs) {
        let user = new User(index,usersobs[index].username,usersobs[index].email,usersobs[index].password);
        //this.users.push(user);
          if(index=== localStorage.getItem('token')){this.activeUser=user;}
          this.users.push(user);
        }});
        console.log(this.users);
  }
  showUserDetails(user:User){
    console.log(user);
  }
}
