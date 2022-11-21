import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { CustomResponse } from '../../../shared/models/custom-response';
import { Product } from '../../../shared/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly http: HttpClient,) { }

  public getProductsByPage(limit: number, offset: number): Observable<CustomResponse<Product[]>> {
    return this.http.get<CustomResponse<Product[]>>(`${ environment.apiUrl }/product/?limit=${ limit }&offset=${ offset }`, {
      withCredentials: true,
    }).pipe(retry(1));
  }

  public getProductById(productId: string): Observable<CustomResponse<Product>> {
    return this.http.get<CustomResponse<Product>>(`${ environment.apiUrl }/product/${ productId }`, 
      { withCredentials: true, }
    ).pipe(retry(1));
  }

  public getRecommendedProductsByCategories(limit: number, offset: number, categoryIds: string): Observable<CustomResponse<Product[]>> {
    return this.http.get<CustomResponse<Product[]>>(`${ environment.apiUrl }/product/category/recommended`, {
        params: {
          limit,
          offset,
          categoryids: categoryIds,
        }
      }).pipe(retry(1));
  }
}
