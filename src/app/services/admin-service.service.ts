import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private apiUrl = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }

  addEmployee(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, user);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  approveUpdate(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/approve-update`, user);
  }

}
