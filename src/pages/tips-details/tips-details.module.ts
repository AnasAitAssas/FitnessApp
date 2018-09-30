import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipsDetailsPage } from './tips-details';

@NgModule({
  declarations: [
    TipsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TipsDetailsPage),
  ],
})
export class TipsDetailsPageModule {}
