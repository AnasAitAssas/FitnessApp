import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalculatorPage} from '../calculator/calculator';
import {SupplementPage} from '../supplement/supplement';
import {FoodPage} from '../food/food';
import {DietPage} from '../diet/diet';
import {TipsPage} from '../tips/tips';




@IonicPage()
@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html',
})
export class NutritionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

Calculator_Page_Route(){
    this.navCtrl.push(CalculatorPage);
  }
  Supplement_Page_Route(){
      this.navCtrl.push(SupplementPage);
    }
Food_Page_Route(){
    this.navCtrl.push(FoodPage);

}
diet_Page_Route(){
  this.navCtrl.push(DietPage);
}
tips_Page_Route(){
  this.navCtrl.push(TipsPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NutritionPage');
  }

}
