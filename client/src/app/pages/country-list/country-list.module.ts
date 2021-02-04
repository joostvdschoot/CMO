import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { CountryListRoutingModule } from './country-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CountryListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CountryListComponent
  ]
})
export class CountryListModule { }
