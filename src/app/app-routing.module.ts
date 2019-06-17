import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageCustomerComponent} from './Components/customer/manage-customer/manage-customer.component';
import {ManageItemComponent} from './Components/item/manage-item/manage-item.component';
import {ManagePaceorderFormComponent} from './Components/placeorder/manage-paceorder-form/manage-paceorder-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './Components/homepage/homepage.module#HomepageModule'
  },

  {
    path: 'customer',
    loadChildren: './Components/customer/customer.module#CustomerModule'
  },

  {
    path: 'item',
   loadChildren: './Components/item/item.module#ItemModule'
  },

  {
    path: 'placeorder',
 loadChildren: './Components/placeorder/placeorder.module#PlaceorderModule'
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
