import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExerciceSetsRepsPage} from '../exercice-sets-reps/exercice-sets-reps';


/**
 * Generated class for the ExerciceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercice-details',
  templateUrl: 'exercice-details.html',
})
export class ExerciceDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Chest_details_Route(){
      this.navCtrl.push(ExerciceSetsRepsPage);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciceDetailsPage');
  }

}
