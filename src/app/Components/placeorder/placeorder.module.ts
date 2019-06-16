import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceorderRoutingModule } from './placeorder-routing.module';
import { ManagePaceorderFormComponent } from './manage-paceorder-form/manage-paceorder-form.component';

@NgModule({
  declarations: [ManagePaceorderFormComponent],
  imports: [
    CommonModule,
    PlaceorderRoutingModule
  ]
})
export class PlaceorderModule { }
