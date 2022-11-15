import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProductByCategoryComponent } from './recommended-product-by-category.component';

describe('RecommendedProductByCategoryComponent', () => {
  let component: RecommendedProductByCategoryComponent;
  let fixture: ComponentFixture<RecommendedProductByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedProductByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
