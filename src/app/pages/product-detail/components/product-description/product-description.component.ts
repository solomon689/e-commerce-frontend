import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() public product: Product | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
