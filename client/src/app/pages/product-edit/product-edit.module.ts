import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditRoutingModule } from './product-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProductEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProductEditComponent
  ]
})
export class ProductEditModule { }
