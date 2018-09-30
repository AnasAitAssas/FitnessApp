import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeeksPage} from '../weeks/weeks';



@IonicPage()
@Component({
  selector: 'page-challanges',
  templateUrl: 'challanges.html',
})
export class ChallangesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  Weeks_Page_Route(){
      this.navCtrl.push(WeeksPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallangesPage');
  }

}
