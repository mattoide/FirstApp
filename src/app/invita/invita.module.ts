import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitaPageRoutingModule } from './invita-routing.module';

import { InvitaPage } from './invita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitaPageRoutingModule
  ],
  declarations: [InvitaPage]
})
export class InvitaPageModule {}
