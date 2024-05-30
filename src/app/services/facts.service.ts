import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FactService {
  private baseUrl = 'https://meowfacts.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getFact(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
  getFacts(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?count=${id}`);
  }
}
