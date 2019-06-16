import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagePaceorderFormComponent} from './manage-paceorder-form/manage-paceorder-form.component';

const routes: Routes = [
  {
    path: '',
    component: ManagePaceorderFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceorderRoutingModule { }
