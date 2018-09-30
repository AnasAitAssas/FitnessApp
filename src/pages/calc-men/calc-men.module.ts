import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcMenPage } from './calc-men';

@NgModule({
  declarations: [
    CalcMenPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcMenPage),
  ],
})
export class CalcMenPageModule {}
