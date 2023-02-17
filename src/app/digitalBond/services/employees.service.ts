import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employess } from '../models/employess';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private httpOption = {};
  constructor(private http: HttpClient) {}
  url = `http://localhost:3000/employees`;

  addEmployee(employee: object): Observable<Employess> {
    return this.http.post<Employess>(
      this.url,
      // employee,

      JSON.stringify(employee),
      (this.httpOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          encType: 'multipart/form-data',
          Accept: 'application/json, text/plain, */*',
        }),
      })
    );
  }
  getEmp(): Observable<Employess[]> {
    return this.http.get<Employess[]>(this.url);
  }
}
