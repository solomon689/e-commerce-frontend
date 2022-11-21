import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import { Subscription } from 'rxjs';
import { Category, SubCategory } from '../../../../shared/models/category';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-recommended-product-by-category',
  templateUrl: './recommended-product-by-category.component.html',
  styleUrls: ['./recommended-product-by-category.component.scss']
})
export class RecommendedProductByCategoryComponent implements OnInit, OnDestroy {
  @Input() public categories: SubCategory[] = [];
  
  public products: Product[] | undefined = [];
  public totalCells: number = 0;
  public productsMatrix: Array<Product[]> = [];
  private getProductsSub!: Subscription;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    const categoryIds: string[] = this.getCategoryIds();
    
    if (this.categories?.length > 0 && this.categories?.length === 1) {
      this.getProductsByCategoryIds(categoryIds[0] + ',');
    }

    if (this.categories?.length > 0 && this.categories?.length > 1) {
      this.getProductsByCategoryIds(categoryIds.join(','));
    }
  }

  ngOnDestroy(): void {
    this.getProductsSub.unsubscribe();
  }

  public getProductsByCategoryIds(categoryIds: string): void {
    this.getProductsSub = this.productsService.getRecommendedProductsByCategories(9,0,categoryIds).subscribe({
      next: (response) => {
        this.products = response.data;

        if (response.data) {
          this.productsMatrix = this.createProductsMatrix(response.data);
        }
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  private getCategoryIds(): string[] {
    const categoryIds: string[] = []

    if (this.categories) {
      for (const category of this.categories) {
        if (!category || !category.id) continue;
  
        categoryIds.push(category.id);
      }

      return categoryIds;
    }
    
    return [];
  }

  private createProductsMatrix(products: Product[]): Array<Product[]> {
    if (!products) return [];
    
    const totalProducts: number = products.length;
    let productsMatrix: Array<Product[]> = [];
    let productIndex: number = 0;
    
    this.totalCells = Math.floor(totalProducts / 3) || 0;
    
    for (let i = 0 ; i < this.totalCells ; i++) {
      const productArray = [];

      while (productIndex < (i + 1)*3) {
        productArray.push(products[productIndex]);
        productIndex++;
      }

      productsMatrix[i] = productArray;
    }

    return productsMatrix;
  }
}
