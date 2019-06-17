import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../dto/customer';


export  const MAIN_URL = 'http://localhost:8081/';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8081/jkl/customers');
  }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8081/jkl/customers', customer);

  }
}
