import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProtinePage} from '../protine/protine';
/**
 * Generated class for the SupplementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supplement',
  templateUrl: 'supplement.html',
})
export class SupplementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Protine_Page_Route(){
      this.navCtrl.push(ProtinePage);
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplementPage');
  }

}
