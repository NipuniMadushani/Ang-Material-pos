import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import {MatTabsModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CustomerService} from '../../service/customer.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  declarations: [ManageCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],

  providers: [
    CustomerService
  ]
})
export class CustomerModule { }
