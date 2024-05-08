import { Component } from '@angular/core';
import { TransactionCreateRequest } from '../../TransactionCreateRequest';
import { CustomerService } from '../../services/customer.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {
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

  constructor(private customerService: CustomerService) { }

  saveWithdraw(): void {
    const data = {
      amount: this.transactionCreateRequest,
      accountNumber: this.transaction.accountNumber
    };

    this.customerService.createWithdraw(this.transactionCreateRequest)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newWithdraw(): void {
    this.submitted = false;
    this.transactionCreateRequest = {
      amount: 0,
      accountNumber: ''
    };
  }

}

