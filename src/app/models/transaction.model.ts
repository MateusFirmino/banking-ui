import { Customer } from "./customer.model";

export class Transaction {
    id?: number;
    amount?: number;
    date?: Date; 
    transactionType?: string;
    accountNumber?: string;
    customer?: Customer;
}
