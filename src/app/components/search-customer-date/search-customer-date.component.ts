import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Transaction } from '../../models/transaction.model';
import { TransactionShow } from '../../TransactionShow';

@Component({
  selector: 'app-search-customer-date',
  templateUrl: './search-customer-date.component.html',
  styleUrl: './search-customer-date.component.css'
})
export class SearchCustomerDateComponent implements OnInit {
  transactions: Transaction[] = [];
  submitted = false;

  transactionShow: TransactionShow = {
    amount: 0,
    accountNumber: '',
    date: '',
    transactionType: ''
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    const date = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato 'yyyy-MM-dd'
    this.loadTransactions(date);
  }

  loadTransactions(date: string): void {
    this.customerService.getAllTransactionsForToday(date)
      .subscribe((response: any) => {
        this.transactions = response.data; // Ou qualquer manipulação necessária para os dados
      }, (error) => {
        console.error('Erro ao obter as transações:', error);
      });
  }
}