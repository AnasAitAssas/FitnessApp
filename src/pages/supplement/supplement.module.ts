import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplementPage } from './supplement';

@NgModule({
  declarations: [
    SupplementPage,
  ],
  imports: [
    IonicPageModule.forChild(SupplementPage),
  ],
})
export class SupplementPageModule {}
