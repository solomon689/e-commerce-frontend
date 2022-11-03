import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Category } from '../../../shared/models/category';
import { environment } from '../../../../environments/environment';
import { CustomResponse } from '../../../shared/models/custom-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getCategories(): Observable<CustomResponse<Category[]>> {
    return this.http.get<CustomResponse<Category[]>>(`${ environment.apiUrl }/category/`)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    let errorMessage: string = '';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${ error.status }, ${ error.message }`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}
