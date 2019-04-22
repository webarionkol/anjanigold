import { Component } from '@angular/core';
import {  NavController, NavParams,Platform,LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


 import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the EventlistPage page.
 *
 * See https:ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {
  public eventlist;
  public img;
  public desc;
  public heading;
  public date;
  public loc;

  constructor(
              public loader:LoadingController,
              public plat:Platform,
              public navParams: NavParams,
    private socialSharing: SocialSharing
    ) {
      this.eventlist=navParams.get("data");

    //  let loading = this.loader.create({
    //   spinner: 'crescent',
  
    // });
    //  loading.present();
    //  setTimeout(() => {
    //    loading.dismiss();
    //  }, 2000);


   }

   

   share(){
    this.plat.ready().then(() =>{
      this.socialSharing.share("A " + this.eventlist.event_name + " event celebrating on " + this.eventlist.event_date + ' at ' + this.eventlist.event_place+" Please share  the event all of your friends and family?" + "Download AnjaniGold app now!","", null, "http://www.anjanigold.in/");
   });
  }
}
