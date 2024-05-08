import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesCustomerComponent } from './balances-customer.component';

describe('BalancesCustomerComponent', () => {
  let component: BalancesCustomerComponent;
  let fixture: ComponentFixture<BalancesCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalancesCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalancesCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
