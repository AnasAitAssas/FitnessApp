import { Component,ViewChild } from '@angular/core';
import { Nav,MenuController,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {ExercicesPage} from '../pages/exercices/exercices';
import {ChallangesPage} from '../pages/challanges/challanges';
import {WorkoutPage} from '../pages/workout/workout';
import {StretchingPage} from '../pages/stretching/stretching';
import {NutritionPage} from '../pages/nutrition/nutrition';
import {CalculatorPage} from '../pages/calculator/calculator';
import {CalcMenPage} from '../pages/calc-men/calc-men';
import {CalcWomanPage} from '../pages/calc-woman/calc-woman';
import {FatLossKeepGainCalcuPage} from '../pages/fat-loss-keep-gain-calcu/fat-loss-keep-gain-calcu';
import {MyworkoutPage} from '../pages/myworkout/myworkout';
import {SupplementPage} from '../pages/supplement/supplement';
import {ProtinePage} from '../pages/protine/protine';
import { ListPage } from '../pages/list/list';
import { WeeksPage } from '../pages/weeks/weeks';
import { WeeksDetailsPage } from '../pages/weeks-details/weeks-details';
import { FoodPage } from '../pages/food/food';
import {ExerciceDetailsPage} from '../pages/exercice-details/exercice-details';
import {ExerciceSetsRepsPage} from '../pages/exercice-sets-reps/exercice-sets-reps';
import {DietPage} from '../pages/diet/diet';
import {CaloriesPage} from '../pages/calories/calories';
import {TipsPage} from '../pages/tips/tips';
import {TipsDetailsPage} from '../pages/tips-details/tips-details';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
     public splashScreen: SplashScreen
   ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

  }
}
