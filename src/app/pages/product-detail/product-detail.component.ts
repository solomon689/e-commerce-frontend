import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Product } from '../../shared/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product: Product | undefined = undefined;
  public error: boolean = false;
  private getProductByIdSub!: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    const productId: string = this.route.snapshot.params['productId'];

    this.getProductById(productId);
  }

  ngOnDestroy(): void {
    this.getProductByIdSub.unsubscribe();
  }

  public getProductById(productId: string): void {
    this.getProductByIdSub = this.productsService.getProductById(productId).subscribe({
      next: (response) => {
        this.product = response.data;
      },
      error: (error) => {
        this.error = true;
        throw new Error(error);
      }
    });
  }
}
