import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the AdvmodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-advmod',
  templateUrl: 'advmod.html',
})
export class AdvmodPage {
  img:any;
  myRand: number;
  imgget:any;

  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    
    this.rest.getAdv().then(data=>{
      this.imgget=data['ads']
      console.log(this.imgget[0].banner_img)
      // Math.floor(Math.random()*this.imgget.length)+1;
    }).then(data=>{
      this.img=this.imgget[Math.floor(Math.random()*this.imgget.length)].banner_img
      console.log(this.img)
    })
    
    
    
     
   
  }
  ionViewDidEnter() {
  
   }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvmodPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
