import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StretchingPage } from './stretching';

@NgModule({
  declarations: [
    StretchingPage,
  ],
  imports: [
    IonicPageModule.forChild(StretchingPage),
  ],
})
export class StretchingPageModule {}
