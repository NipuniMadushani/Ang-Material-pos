import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'customer',
  //   loadChildren: './customer/customer.module#CustomerModule'
  // },

  // {
  //   path: 'item',
  //   loadChildren: './item/item.module#ItemModule'
  // },
  //
  // {
  //   path: 'placeorder',
  //   loadChildren: './placeorder/placeorder.module#PlaceorderModule'
  // },
  //
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  //
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
