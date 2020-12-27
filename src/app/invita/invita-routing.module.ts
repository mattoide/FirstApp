import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitaPage } from './invita.page';

const routes: Routes = [
  {
    path: '',
    component: InvitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitaPageRoutingModule {}
