import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcWomanPage } from './calc-woman';

@NgModule({
  declarations: [
    CalcWomanPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcWomanPage),
  ],
})
export class CalcWomanPageModule {}
