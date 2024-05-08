import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CustomerCreateResponse } from '../../CustomerCreateResponse';
import { CustomerCreateRequest } from '../../CustomerCreateRequest';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  customer: Customer = {
    name: '',
    birthdate: '',
    email: '',
  };
  submitted = false;

  customerCreateRequest: CustomerCreateRequest = {
    name: '',
    birthdate: '',
    email: '',
  };
  
  constructor(private customerService: CustomerService) {}

    saveCustomer(): void {
      const data = {
        name: this.customer.name,
        birthdate: this.customer.birthdate,
        email: this.customer.email,
      };

      this.customerService.createCustomer(this.customerCreateRequest)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    }

    newCustomer(): void {
      this.submitted = false;
      this.customerCreateRequest = {
        name: '',
        birthdate: '',
        email: '',
      };
    }
}
