import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; 
import { OrerDeliveryComponent } from './order-delivery/order-delivery.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DatePickerComponent } from './ui-kit/date-picker/date-picker.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    OrerDeliveryComponent, 
    DatePickerComponent
  ],
  exports: [DatePickerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
