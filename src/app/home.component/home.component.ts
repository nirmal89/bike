import { Component, OnInit } from '@angular/core';  
import { CustomerService } from '../customer.service/customer.service';
@Component({
  selector: 'home-app',
  templateUrl: './home.html',  
})
export class HomeComponent implements OnInit  { 
  customers:any[];

  constructor(private _customerService : CustomerService){}
      ngOnInit(){
      this.customers = this._customerService.getEmp();
    }
}
