import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { CustomResponse } from '../../../shared/models/custom-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getUserData(): Observable<CustomResponse<any>> {
    return this.http.get<CustomResponse<any>>(`${ this.apiUrl }/user/data`, {
      withCredentials: true,
    }).pipe(retry(1));
  }
}
