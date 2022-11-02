import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public async getCategories() {
    return this.http.get(`${ environment.apiUrl }category/`).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
