import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../User';
@Component({
  selector: 'app-user-regiter',
  templateUrl: './user-regiter.component.html',
  styleUrls: ['./user-regiter.component.css']
})
export class UserRegiterComponent implements OnInit {
 
   user : User = new User();
   message : any;
  constructor(private service:UserServiceService){}

  ngOnInit(): void {
    
  }

  public register(){
 
    if(this.user.user_name == null || this.user.password == null
      ||this.user.user_name =='' ||this.user.password ==''){
        alert('UserName and password is a required field');
        if(this.user.user_name == null || this.user.user_name ==''){
           this.user.user_name="";
        }
        if(this.user.password == null || this.user.password ==''){
           this.user.password="";
        }
      return;
    }
    let response = this.service.doRegistration(this.user);
        response.subscribe((data:any)=>this.message=data);
  }
}
