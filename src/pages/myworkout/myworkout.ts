import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MyworkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myworkout',
  templateUrl: 'myworkout.html',
})
export class MyworkoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyworkoutPage');
  }

}
