import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-balances-customer',
  templateUrl: './balances-customer.component.html',
  styleUrl: './balances-customer.component.css'
})
export class BalancesCustomerComponent implements OnInit{
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(): void {
    this.customerService.getBalance().subscribe(response => {
      if (response.success) {
        this.customers = response.data.content;
      } else {
        console.error('Error getting balances:', response.message);
      }
    });
  }

}