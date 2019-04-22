import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


/**
 * Generated class for the AboutdetlsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-aboutdetls',
  templateUrl: 'aboutdetls.html',
})
export class AboutdetlsPage {
  public name;
  public heading;
  public dec;
  public flag:boolean=false;
   
  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.name=this.navParams.get('name');
  console.log(this.name)

     
      this.rest.getAboutUs().then(data=>{
        this.dec=data['about_us'].content_value;
        this.heading=data['about_us'].page
      console.log(data)
      })
        
        
          

     

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutdetlsPage');
  }



}
