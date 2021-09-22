import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyCommonService {

  constructor(private http:HttpClient) { }
  getRecords(pageNo:number):Observable<any>{
    const headers = {'accept':'application/json'};
    return this.http.get('http://127.0.0.1:8000/api/users?page='+pageNo,{headers});
  }
}
