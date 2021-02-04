import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerListComponent } from './partner-list.component';
import { PartnerListRoutingModule } from './partner-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PartnerListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PartnerListComponent
  ]
})
export class PartnerListModule { }
