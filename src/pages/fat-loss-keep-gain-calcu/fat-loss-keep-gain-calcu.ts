import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FatLossKeepGainCalcuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fat-loss-keep-gain-calcu',
  templateUrl: 'fat-loss-keep-gain-calcu.html',
})
export class FatLossKeepGainCalcuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FatLossKeepGainCalcuPage');
  }

}
