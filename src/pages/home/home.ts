import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ExercicesPage} from '../exercices/exercices';
import {WorkoutPage} from '../workout/workout';
import {ChallangesPage} from '../challanges/challanges';
import {StretchingPage} from '../stretching/stretching';
import {NutritionPage} from '../nutrition/nutrition';
import {MyworkoutPage} from '../myworkout/myworkout';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videos :any[] = [
    {
      title: 'flashlight application',
      video: 'https://www.youtube.com/watch?v=2JeKfQ2r2r8',
    },
    {
      title : 'application',
      video:  'https://www.youtube.com/watch?v=AyS3uw7HZOM',
    }
  ]
  constructor(public navCtrl: NavController) {}

  Nutrition_Page_Route(){
    this.navCtrl.push(NutritionPage);
  }
  Ex_Page_Route(){
this.navCtrl.push(ExercicesPage);
}
  Workout_Page_Route(){
this.navCtrl.push(WorkoutPage);
  }
challanges_Page_Route(){
this.navCtrl.push(ChallangesPage);
  }
  Stretching_Page_Route(){
    this.navCtrl.push(StretchingPage);
  }
  Myworkout_Page_Route(){
    this.navCtrl.push(MyworkoutPage);
  }

}
