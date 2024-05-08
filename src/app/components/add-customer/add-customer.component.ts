import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CustomerCreateResponse } from '../../CustomerCreateResponse';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  customer: Customer = {
    name: '',
    birthdate: new Date(),
    email: '',
    accountNumber: ''
  };
  submitted = false;

  customerCreateResponse: CustomerCreateResponse = {
    id: 0,
    name: '',
    birthdate: new Date(),
    email: '',
    accountNumber: '',
    balance: 0,
  };

  constructor(private customerService: CustomerService) {}

    saveCustomer(): void {
      const data = {
        title: this.customer.name,
        birthdate: this.customer.birthdate,
        email: this.customer.email,
        accountNumber: this.customer.accountNumber
      };

      this.customerService.createClient(this.customerCreateResponse)
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
      this.customer = {
        name: '',
        birthdate: new Date(),
        email: '',
        accountNumber: ''
      };
    }
}
