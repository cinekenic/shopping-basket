import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<HttpClient>('  http://localhost:3000/products').pipe(
      map((res: HttpClient) => {
        return res;
      })
    );
  }
}
