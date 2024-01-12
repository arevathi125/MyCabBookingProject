import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ValidUser } from '../ValidUser';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user : User = new User();
   myvar: any;
  validUser : ValidUser = new ValidUser();

 constructor(private service: UserServiceService, private router: Router){}
 ngOnInit(): void {
    
 }

 public loginCheck(){
  if(this.user.user_name == null || this.user.password == null
    ||this.user.user_name =='' ||this.user.password ==''){
      alert('UserName and Password is a required field');
      if(this.user.user_name == null || this.user.user_name ==''){
         this.user.user_name="";
      }
      if(this.user.password == null || this.user.password ==''){
         this.user.password="";
      }
    return;
  }
      this.myvar = this.service.validateUserDetails(this.user.user_name,this.user.password).subscribe(
      data => {
        this.validUser = <ValidUser>(data);
        console.log("This should be the response???: ", this.validUser);
        if(this.validUser == null){
          alert('Invalid username or password');
        } else {
          this.router.navigate(['booking']);
        }
      },
      err => {
        alert('System Error');
      });
  }  

    
}
