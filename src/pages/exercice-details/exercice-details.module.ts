import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciceDetailsPage } from './exercice-details';

@NgModule({
  declarations: [
    ExerciceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciceDetailsPage),
  ],
})
export class ExerciceDetailsPageModule {}
