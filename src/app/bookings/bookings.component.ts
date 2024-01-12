import { Component, OnInit } from '@angular/core';
import { Booking } from '../Booking'
import { UserServiceService } from '../user-service.service';
import { BookingServiceService } from '../booking-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  booking : Booking = new Booking();

  constructor(private bookingService:BookingServiceService,private router:Router){
  }
    ngOnInit(): void {
      
    }
  

  public bookCab(){
    let response = this.bookingService.doRegistration(this.booking);
    response.subscribe((data:any)=>this.booking=data);
    this.router.navigate(['bookinglist']);
  }
}
