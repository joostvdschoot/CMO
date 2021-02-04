import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryEditComponent } from './country-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CountryEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryEditRoutingModule { }
