import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProtinePage } from './protine';

@NgModule({
  declarations: [
    ProtinePage,
  ],
  imports: [
    IonicPageModule.forChild(ProtinePage),
  ],
})
export class ProtinePageModule {}
