import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent } from './login/login.component';
import { OrerDeliveryComponent } from './order-delivery/order-delivery.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'order', component: OrerDeliveryComponent },
  { path: 'login', component: LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
