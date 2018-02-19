import { Component } from '@angular/core';  
import { CustomerService } from './customer.service/customer.service';
@Component({
  selector: 'my-app',
  templateUrl: './root.html',
  providers : [CustomerService]
  
})
export class AppComponent  { }
