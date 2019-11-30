import { Loginemployee } from './login/auth/login/loginemployee';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
    providedIn: 'root'
  })
export class Employeeservice {
    url='http://localhost:54868/'
  constructor(private http:HttpClient) { }
  createemployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url+'api/Employeemasters',employee)
  }
  loginemployee(loginEmployee: Loginemployee): Observable<Loginemployee> {
    return this.http.post<Loginemployee>(this.url + 'api/Login', loginEmployee)
  }
}
