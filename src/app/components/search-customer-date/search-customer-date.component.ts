import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Transaction } from '../../models/transaction.model';
import { TransactionShow } from '../../TransactionShow';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-search-customer-date',
  templateUrl: './search-customer-date.component.html',
  styleUrl: './search-customer-date.component.css'
})
export class SearchCustomerDateComponent implements OnInit {
  transaction: Transaction[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getAllTransactionsForToday();
  }

  getAllTransactionsForToday(): void {
    this.customerService.getAllTransactionsForToday().subscribe(response => {
      if (response.success) {
        this.transaction = response.data.content;
      } else {
        console.error('Error getting transactions:', response.message);
      }
    });
  }
}