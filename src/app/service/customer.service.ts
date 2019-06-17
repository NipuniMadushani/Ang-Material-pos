import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../dto/customer';


export  const MAIN_URL = 'http://localhost:8080';

const URL = '/api/v1/customers';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/auth/customers');
  }
}
