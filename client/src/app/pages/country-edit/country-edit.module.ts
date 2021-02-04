import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryEditComponent } from './country-edit.component';
import { CountryEditRoutingModule } from './country-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CountryEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CountryEditComponent
  ]
})
export class CountryEditModule { }
