import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayElement } from './ArrayElements';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MajorOppsService {
  
  private apiUrl = 'http://localhost:8080/api/array';

  constructor(private http: HttpClient) { }

  getArrayElements(): Observable<ArrayElement[]> {
    return this.http.get<ArrayElement[]>(this.apiUrl);
  }

  addProduct(product: ArrayElement): Observable<ArrayElement> {
    return this.http.post<ArrayElement>(this.apiUrl, product);
  }

}
