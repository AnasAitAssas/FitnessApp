import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CaloriesPage} from '../calories/calories';
@IonicPage()
@Component({
  selector: 'page-diet',
  templateUrl: 'diet.html',
})
export class DietPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  calories_Page_Route(){
      this.navCtrl.push(CaloriesPage);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DietPage');
  }

}
