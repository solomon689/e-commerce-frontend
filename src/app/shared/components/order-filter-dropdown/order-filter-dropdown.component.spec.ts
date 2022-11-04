import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFilterDropdownComponent } from './order-filter-dropdown.component';

describe('OrderFilterDropdownComponent', () => {
  let component: OrderFilterDropdownComponent;
  let fixture: ComponentFixture<OrderFilterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFilterDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
