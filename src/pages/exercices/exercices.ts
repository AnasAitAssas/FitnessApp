import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExerciceDetailsPage} from '../exercice-details/exercice-details';


@IonicPage()
@Component({
  selector: 'page-exercices',
  templateUrl: 'exercices.html',
})
export class ExercicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Chest_Route(){
      this.navCtrl.push(ExerciceDetailsPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercicesPage');
  }

}
