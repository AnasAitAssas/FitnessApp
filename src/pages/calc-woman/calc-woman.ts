import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FatLossKeepGainCalcuPage} from '../fat-loss-keep-gain-calcu/fat-loss-keep-gain-calcu';

@IonicPage()
@Component({
  selector: 'page-calc-woman',
  templateUrl: 'calc-woman.html',
})
export class CalcWomanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  Fat_Loss_Page_Route(){
    this.navCtrl.push(FatLossKeepGainCalcuPage);
  }
  Keep_Weight_Page_Route(){
    this.navCtrl.push(FatLossKeepGainCalcuPage);
  }
  Gain_Muscles_Page_Route(){
    this.navCtrl.push(FatLossKeepGainCalcuPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcWomanPage');
  }

}
