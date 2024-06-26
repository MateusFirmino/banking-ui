import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { SearchCustomerDateComponent } from './components/search-customer-date/search-customer-date.component';
import { BalancesCustomerComponent } from './components/balances-customer/balances-customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerListComponent },
  { path: 'reportByDate', component: SearchCustomerDateComponent },
  { path: 'customer/:accountNumber', component: CustomerDetailsComponent },
  { path: 'balance', component: BalancesCustomerComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
