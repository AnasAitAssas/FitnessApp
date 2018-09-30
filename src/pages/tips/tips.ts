import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TipsDetailsPage} from '../tips-details/tips-details';

@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
tips_details_Page_Route(){
      this.navCtrl.push(TipsDetailsPage);
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsPage');
  }

}
