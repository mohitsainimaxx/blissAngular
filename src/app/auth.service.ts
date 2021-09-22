import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }
  login(email: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/login', {
      email,
      password
    }, httpOptions);
  }
  getAuthStatus(){
    return sessionStorage.getItem('token');
  }

}
