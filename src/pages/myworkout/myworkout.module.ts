import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyworkoutPage } from './myworkout';

@NgModule({
  declarations: [
    MyworkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(MyworkoutPage),
  ],
})
export class MyworkoutPageModule {}
