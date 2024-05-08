import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {
  transactions: Transaction[] = [];
  accountNumber: number = 0;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  getTransactionsById(): void {
    if (this.accountNumber !== 0) {
      this.customerService.getTransactionsById(this.accountNumber).subscribe(response => {
        if (response.success) {
          this.transactions = response.data.content;
        } else {
          console.error('Error getting transactions:', response.message);
        }
      });
    } else {
      console.error('Account number is required');
    }
  }
}
