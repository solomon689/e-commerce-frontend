import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product | null = null;
  public stars: number[] = [1,2,3,4,5];

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  public viewProductDetails(product: Product | null) {
    this.router.navigate([`/producto/${ product?.id }`]);
  }

}
