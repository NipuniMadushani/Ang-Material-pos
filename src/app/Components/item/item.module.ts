import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ManageItemComponent } from './manage-item/manage-item.component';
import {MatTabsModule, MatToolbarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  declarations: [ManageItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ItemModule { }
