import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-product-aspects',
  templateUrl: './product-aspects.component.html',
  styleUrls: ['./product-aspects.component.scss']
})
export class ProductAspectsComponent implements OnInit {
  @Input() public product: Product | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
