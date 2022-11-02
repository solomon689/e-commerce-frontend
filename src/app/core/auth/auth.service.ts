import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CustomResponse } from '../../shared/models/custom-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public login(data: any): Observable<CustomResponse<any>> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      email: data.email,
      password: data.password,
    });

    return this.http.get<CustomResponse<any>>(`${ environment.apiUrl }auth/login`, { headers, withCredentials: true })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    let errorMessage: string = '';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      Swal.fire({
        title: error.error.message,
        icon: 'error',
        showConfirmButton: true,
        confirmButtonColor: 'black',
        confirmButtonText: 'Aceptar',
      });
      
      errorMessage = `Error code: ${ error.status }, ${ error.message }`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}
