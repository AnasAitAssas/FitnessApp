import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ExercicesPage} from '../pages/exercices/exercices';
import {WorkoutPage} from '../pages/workout/workout';
import {ChallangesPage} from '../pages/challanges/challanges';
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




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExercicesPage,
    WorkoutPage,
    ChallangesPage,
    StretchingPage,
    NutritionPage,
    CalculatorPage,
    CalcMenPage,
    CalcWomanPage,
    FatLossKeepGainCalcuPage,
    MyworkoutPage,
    SupplementPage,
    ProtinePage,
    ListPage,
    WeeksPage,
    WeeksDetailsPage,
    FoodPage,
    ExerciceDetailsPage,
    ExerciceSetsRepsPage,
    DietPage,
    CaloriesPage,
    TipsPage,
    TipsDetailsPage


  ],
  imports: [
    BrowserModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExercicesPage,
    WorkoutPage,
    ChallangesPage,
    StretchingPage,
    NutritionPage,
    CalculatorPage,
    CalcMenPage,
    CalcWomanPage,
    FatLossKeepGainCalcuPage,
    MyworkoutPage,
    SupplementPage,
    ProtinePage,
    ListPage,
    WeeksPage,
    WeeksDetailsPage,
    FoodPage,
    ExerciceDetailsPage,
    ExerciceSetsRepsPage,
    DietPage,
    CaloriesPage,
    TipsPage,
    TipsDetailsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
