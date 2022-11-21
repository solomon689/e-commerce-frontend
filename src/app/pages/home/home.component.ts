import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductsService } from '../../core/services/products/products.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public products: Product[] = new Array<Product>();
  public totalProducts: number = 0;
  public error: boolean = false;
  public page: number = 1;
  private limit: number = 9;
  private offset: number = 0;
  private productSub!: Subscription;

  constructor(
    private productService: ProductsService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts(this.limit, this.offset);
    }, 2000);
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

  public loadPage(page: number): void {
    this.page = page;
    this.offset += this.products.length; 
    this.products = [];
    this.router.navigate(['inicio'], { queryParams: { page } })
    this.getProducts(this.limit, this.offset);
  }

  private getProducts(limit: number, offset: number): void {
    this.productSub = this.productService.getProductsByPage(this.limit, this.offset).subscribe({
      next: (response) => {
        if (response.data) {
          this.totalProducts = response.totalProducts || 0;

          for (let i = 0 ; i < response.data.length ; i++) {
            const product: Product = new Product(response.data[i]);

            this.products.push(product);
          }
        }
      },
      error: (error) => {
        this.error = true;
      }
    });
  }

}
