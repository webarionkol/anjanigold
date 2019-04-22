import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventlistPage } from '../eventlist/eventlist';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  events:any;
  check:boolean=false;
  whatsapp:any;
  fb:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider) {
      this.api.getContact().then(data=>{
        console.log(data)
        this.whatsapp=data['contactus'][5].content_value;
        this.fb=data['contactus'][3].content_value;
      
        console.log(data)
      })
  }

  ionViewWillEnter() {
    this.api.getEvents().then((data:any) => {
      if(data.events.length==0){
        this.check=true;
       }
       else{
         this.check=false;
         this.events = data.events;
       }
     console.log(data);
   
   }, (err) => {
    console.log(err);
   });
  }

  getProducts(event){
    this.navCtrl.push(EventlistPage, {data: event})
  }
}
