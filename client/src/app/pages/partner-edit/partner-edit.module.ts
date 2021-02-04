import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerEditComponent } from './partner-edit.component';
import { PartnerEditRoutingModule } from './partner-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PartnerEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PartnerEditComponent
  ]
})
export class PartnerEditModule { }
