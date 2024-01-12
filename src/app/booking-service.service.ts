import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private http:HttpClient) { }
 
  public doRegistration(cab:any){
  return this.http.post("http://localhost:8084/insertBooking",cab,{responseType:'text' as 'json'});
 }

 public getAllBookings(){
  return this.http.get("http://localhost:8084/getAllBookings")
 }

 public getBookingById(id:any){
  return this.http.get("http://localhost:8084/getBookingById/"+id)
 }

 public deleteBooking(id:any){
  return this.http.delete("http://localhost:8084/deleteBooking/"+id)
 }

 public updateBooking(id:any,cab:any){
  return this.http.put("http://localhost:8084/updateBooking/"+id,cab,{responseType:'text' as 'json'});
 }
}
