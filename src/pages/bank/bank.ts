import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the BankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-bank',
  templateUrl: 'bank.html',
})
export class BankPage {
public bank:any;
  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.rest.Bank().then(data=>{
    this.bank=data['banks'];
    console.log(data['banks'])
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankPage');
  }

}
