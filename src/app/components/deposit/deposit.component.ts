import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Transaction } from '../../models/transaction.model';
import { TransactionCreateRequest } from '../../TransactionCreateRequest';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  transaction: Transaction = {
    amount: 0,
    date: new Date(),
    accountNumber: '',
    transactionType: ''
  };
  submitted = false;

  transactionCreateRequest: TransactionCreateRequest = {
    amount: 0,
    accountNumber: '',
  };

  constructor(private customerService: CustomerService) {}

  saveDeposit(): void {
    const data = {
      amount: this.transactionCreateRequest,
      accountNumber: this.transaction.accountNumber
    };

    this.customerService.createDeposit(this.transactionCreateRequest)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDeposit(): void {
    this.submitted = false;
    this.transactionCreateRequest = {
      amount: 0,
      accountNumber: ''
    };
  }

}
