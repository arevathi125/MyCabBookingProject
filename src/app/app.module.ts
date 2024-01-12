import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegiterComponent } from './user-regiter/user-regiter.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';

const routes:Routes = [
  {path : "user-login",component:UserLoginComponent},
  {path : "user-register",component:UserRegiterComponent},
  {path : "booking",component:BookingsComponent},
  {path : "bookinglist",component:BookinglistComponent},
  {path : "booking-edit/:cab_id",component:BookingEditComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegiterComponent,
    BookingsComponent,
    BookinglistComponent,
    BookingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
