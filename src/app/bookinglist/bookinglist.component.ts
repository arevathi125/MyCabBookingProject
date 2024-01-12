import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {
  bookings:any;
 constructor(private service: BookingServiceService, private router: Router){}

 ngOnInit(): void {
   let response = this.service.getAllBookings();
   response.subscribe((data:any)=>this.bookings=data);
 }

 public deleteBookings(cab_id:number){
  let response=this.service.deleteBooking(cab_id);
  response.subscribe((data:any)=>this.bookings=data);
 }
 public editBookings(cab_id:number){
  this.router.navigate(['booking-edit',cab_id])
 }
}
