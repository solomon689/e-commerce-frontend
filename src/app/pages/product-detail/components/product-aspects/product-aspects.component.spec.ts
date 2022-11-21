import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAspectsComponent } from './product-aspects.component';

describe('ProductAspectsComponent', () => {
  let component: ProductAspectsComponent;
  let fixture: ComponentFixture<ProductAspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAspectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
