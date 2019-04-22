import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
  public dec;
  public image;
  public name;
  


  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.name=this.navParams.get('name');
    console.log(this.name)
  
       
        this.rest.getTerms().then(data=>{
          this.dec=data['tnc'].content_value;
        
       
        })

   

  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

}
