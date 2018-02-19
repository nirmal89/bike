import { Injectable } from "@angular/core";

Injectable()
export class CustomerService{
   getCustomers(){
       return [
           {"id":1, "name":"Nirmal"},
           {"id":2, "name":"krishna"},
           {"id":3, "name":"Vaithesh"},
           {"id":4, "name":"Sheik"}
       ]
   }

   getEmp(){
    return [
        {"id":1, "name":"Nirmal"},
        {"id":2, "name":"krishna"},
        {"id":3, "name":"Vaithesh"},
        {"id":4, "name":"Sheik"}
    ]
}
}