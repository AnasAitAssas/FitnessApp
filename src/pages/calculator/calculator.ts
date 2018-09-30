import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalcMenPage} from '../calc-men/calc-men';
import {CalcWomanPage} from '../calc-woman/calc-woman';




@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  Men_Page_Route(){
      this.navCtrl.push(CalcMenPage);

  }

  Woman_Page_Route(){
      this.navCtrl.push(CalcWomanPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
