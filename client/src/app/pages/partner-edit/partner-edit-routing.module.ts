import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerEditComponent } from './partner-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerEditRoutingModule { }
