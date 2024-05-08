import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerDateComponent } from './search-customer-date.component';

describe('SearchCustomerDateComponent', () => {
  let component: SearchCustomerDateComponent;
  let fixture: ComponentFixture<SearchCustomerDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchCustomerDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCustomerDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
