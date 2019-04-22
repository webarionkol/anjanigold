import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {
  tabledata:any;
  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.rest.getAnalysis().then(data=>{
      this.tabledata=data['analysis']
      console.log(this.tabledata)
    })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

}
