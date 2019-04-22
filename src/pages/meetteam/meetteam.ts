import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the MeetteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-meetteam',
  templateUrl: 'meetteam.html',
})
export class MeetteamPage {
  public team;
  check:boolean=false;
  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
     
     this.rest.getMeetTeam().then(data=>{
      if(data['team'].length==0){
        this.check=true;
       }
       else{
         this.check=false;
         this.team=data['team']
       }


      
       console.log(this.team)
     })
  
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetteamPage');
  }

}
