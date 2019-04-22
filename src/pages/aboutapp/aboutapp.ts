import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutdetlsPage } from '../aboutdetls/aboutdetls';
import { TermsPage } from '../terms/terms';
import { MeetteamPage } from '../meetteam/meetteam';

/**
 * Generated class for the AboutappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-aboutapp',
  templateUrl: 'aboutapp.html',
})
export class AboutappPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutappPage');
  }
  aboutus(){
    this.navCtrl.push(AboutdetlsPage)
  }
  terms(){
    this.navCtrl.push(TermsPage)
  }
  meet(){
    this.navCtrl.push(MeetteamPage)
  }
}
