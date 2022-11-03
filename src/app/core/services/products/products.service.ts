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

  public getProducts(page: number = 1): Observable<CustomResponse<Product[]>> {
    return this.http.get<CustomResponse<Product[]>>(`${ environment.apiUrl }/product/?page=${ page }`, {
      withCredentials: true,
    })
      .pipe(retry(1));
  }
}
