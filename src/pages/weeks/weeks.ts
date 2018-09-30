import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeeksDetailsPage} from '../weeks-details/weeks-details';
/**
 * Generated class for the WeeksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weeks',
  templateUrl: 'weeks.html',
})
export class WeeksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  Weeks_details_Page_Route(){
      this.navCtrl.push(WeeksDetailsPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeksPage');
  }

}
