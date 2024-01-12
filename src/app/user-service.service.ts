import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public doRegistration(user:any){
    return this.http.post("http://localhost:8084/insertUser",user,{responseType:'text' as'json'});
  }

  public getAllUsers(){
    return this.http.get("http://localhost:8084/getallUsers");
  }

  public getUserById(id:any){
    return this.http.get("http://localhost:8084/getUserById/"+id)
  }

  public deleteUserById(id:any){
    return this.http.delete("http://localhost:8084/deleteUser/"+id)
  }

  public updateUserById(id:any, user:any){
    return this.http.put("http://localhost:8084/updateUser/"+id,user,{responseType:'text' as 'json'});
  }

  public validateUserDetails(username:any, password:any){
    return this.http.get("http://localhost:8084/validateUser/"+username+"/"+password);
  }

}
