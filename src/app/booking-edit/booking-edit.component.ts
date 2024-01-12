import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../Booking';
import { response } from 'express';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {
 booking : Booking = new Booking();
 
   cab_id : any;
   name : any;
   pickUpLocation : any;
   dropLocation : any;
   date : any;
   time : any;
   cabType : any;

  constructor(private service : BookingServiceService, private route : ActivatedRoute, private router : Router){}

/* ngOnInit(): void {
  this.route.paramMap.subscribe(params=>{
    alert(params);
    const idParam = params.get('cab_id');
    if(idParam !== null){
      this.cab_id =+ idParam;
      }
    else {
      console.error("cab_id is missing or null");
    }
  })
}  */

ngOnInit(): void {
  this.route.paramMap.subscribe(params=>{
    alert(params);
    const idParam = params.get('cab_id');
    if(idParam !== null){
      this.cab_id =+ idParam;
     // this.fetchBooking();
      }
    else {
      console.error("cab_id is missing or null");
    }
  })
}

/* fetchBooking(){
  this.http.get("http://localhost:8084/getBookingById/"+this.cab_id).subscribe((response:any)=>
  {
    const bookng = response[0];
    console.log(response[0]);
    this.name = bookng.name;
    this.pickUpLocation = bookng.pickUpLocation;
    this.dropLocation = bookng.dropLocation;
    this.date = bookng.date;
    this.time = bookng.time;
    this.cabType = bookng.cabType;
  }
  );
}  */

 public updateBooking(){
  let response = this.service.updateBooking(this.cab_id,this.booking);
  response.subscribe((data:any)=> this.booking=data);
    this.router.navigate(['bookinglist']);
 }
}
