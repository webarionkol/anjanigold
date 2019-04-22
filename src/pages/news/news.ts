import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
 Notific:any;
 check:boolean=false;
 whatsapp:any;
 fb:any;
  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
   this.rest.getNotifications().then(data=>{
    
      if(data['notifications'].length==0){
       this.check=true;
      }
      else{
        this.check=false;
        this.Notific=data['notifications'];
      }
       console.log(this.check)
   })

   this.rest.getContact().then(data=>{
    console.log(data)
    this.whatsapp=data['contactus'][5].content_value;
    this.fb=data['contactus'][3].content_value;
  
    console.log(data)
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
