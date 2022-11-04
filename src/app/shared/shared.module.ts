import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OrderFilterDropdownComponent } from './components/order-filter-dropdown/order-filter-dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent,
    OrderFilterDropdownComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
    ProductCardComponent,
    OrderFilterDropdownComponent,
  ],
  providers: [CookieService]
})
export class SharedModule { }
