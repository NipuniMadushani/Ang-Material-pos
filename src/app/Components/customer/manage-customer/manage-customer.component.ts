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

  customer: Customer = new Customer();
  customerList: Array<Customer> = [];
  manually = false;
  cust: Customer = null;
  @ViewChild('customerForm', {static: true}) customerForm: NgForm;

  constructor(private service: CustomerService) {
  }

  ngOnInit() {
    this.allCustomer();
  }

  private allCustomer() {
    this.service.getAllCustomers().subscribe(value =>
      this.customerList = value);
  }

  saveCustomer(): void {
    alert('hello');
    this.service.saveCustomer(this.customer).subscribe(
      (result) => {
        console.log(this.customer);
        console.log(this.customerForm);
        alert('Customer Added Successfully ');
        this.allCustomer();
      }
    );
  }

  selectCustomer(customer: Customer): void {
    this.customer = customer;
    this.cust = Object.assign({}, customer);
    this.manually = true;

  }

  deleteCustomer(id): void {
    if (confirm('Are you want to delete this customer?')) {
      console.log(id);
      this.service.deleteCustomer(id).subscribe(
        (result) => {
          alert('Customer Delete');
          this.allCustomer();
        }
      );

    }
  }

}
