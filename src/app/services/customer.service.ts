import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../ApiResponse';
import { CustomerPage } from '../CustomerPage';
import { CustomerCreateResponse } from '../CustomerCreateResponse';
import { CustomerCreateRequest } from '../CustomerCreateRequest';

const baseUrl = 'http://localhost:8080/banking-api/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient){}

  getAllCustomers(): Observable<ApiResponse<CustomerPage>> {
    return this.http.get<ApiResponse<CustomerPage>>(`${baseUrl}`);
  }

  getTransactionsById(accountNumber: number): Observable<ApiResponse<CustomerPage>> {
    return this.http.get<ApiResponse<CustomerPage>>(`${baseUrl}/${accountNumber}`);
  }

  createCustomer(createRequest: CustomerCreateRequest): Observable<ApiResponse<CustomerCreateResponse>> {
    return this.http.post<ApiResponse<CustomerCreateResponse>>(`${baseUrl}`, createRequest);
}

}