import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChallangesPage } from './challanges';

@NgModule({
  declarations: [
    ChallangesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallangesPage),
  ],
})
export class ChallangesPageModule {}
