import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Customer} from '../../../dto/customer';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {
//   customer: Customer = new Customer();
// customerList: Array<Customer> = [];
//   manually = false;
//   cust: Customer = null;

  customers: Customer[] = [];
  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.allCustomer();
  }

  private allCustomer() {
    this.service.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }
}

