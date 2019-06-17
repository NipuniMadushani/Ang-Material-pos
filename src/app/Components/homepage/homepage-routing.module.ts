import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageItemComponent} from '../item/manage-item/manage-item.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
