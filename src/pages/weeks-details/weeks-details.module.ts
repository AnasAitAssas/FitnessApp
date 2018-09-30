import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeeksDetailsPage } from './weeks-details';

@NgModule({
  declarations: [
    WeeksDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WeeksDetailsPage),
  ],
})
export class WeeksDetailsPageModule {}
