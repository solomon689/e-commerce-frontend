import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductAspectsComponent } from './components/product-aspects/product-aspects.component';
import { RecommendedProductByCategoryComponent } from './components/recommended-product-by-category/recommended-product-by-category.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductDescriptionComponent,
    ProductAspectsComponent,
    RecommendedProductByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    RouterModule,
    CoreModule,
    SharedModule,
  ]
})
export class ProductDetailModule { }
