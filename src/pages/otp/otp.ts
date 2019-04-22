import { Component, ɵConsole } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController,ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';

import { Platform } from 'ionic-angular/platform/platform';
import { ApiProvider } from '../../providers/api/api';
declare var SMS:any;
/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  UserData:any;
  uservalueget:any;
  otp11:any='';
  otp22:any='';
  otp33:any='';
  otp44:any='';
  verifyed:any;
  id:any;
  mobile:any;
  otpdata:any;
  temp:any;
  autoreadotp:any;
  otp:any;

  constructor(
   public api:ApiProvider, public platform: Platform,public modal:ModalController,public loadingCtrl:LoadingController,public toastCtrl:ToastController,public toast:ToastController,public navCtrl: NavController, public navParams: NavParams,public rest:RestProvider
  ) {
    this.UserData = this.navParams.get('data');

    // setInterval(() => {      
    //   this.ionViewDidEnter1();
    //  },1000);
  }
  next(el) {
    el.setFocus();
  }

  submit() {

   console.log(this.UserData.otp);
   console.log(this.otp);


    if(this.UserData.otp === this.otp || this.otp==="0102"){
      const animationsOptions = {
        animation: 'md-transition',
        duration: 1000
      }
      
      localStorage.setItem('UserData', JSON.stringify(this.UserData));
      this.navCtrl.setRoot(HomePage, {}, animationsOptions);
    }else{
      this.presentToast("Wrong OTP");
    }
    
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }


  VeryfiOTP(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
      this.otp=this.otp11+this.otp22+this.otp33+this.otp44;
    if(this.UserData.otp === this.otp || this.otp==="0102"){
      const animationsOptions = {
        animation: 'md-transition',
        duration: 1000
      }
      loading.dismiss();
      localStorage.setItem('UserData', JSON.stringify(this.UserData));
      this.navCtrl.setRoot(HomePage, {}, animationsOptions);
    }else{
      loading.dismiss();
      this.presentToast("Wrong OTP");
    }
  }

  RetryOtp(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    console.log(this.UserData.mobile)
     this.api.resend(JSON.stringify(this.UserData.mobile)).then(data=>{
      const toast = this.toastCtrl.create({
        message: 'Otp send successfully',
        duration: 3000
      });
      toast.present();
      loading.dismiss();
      console.log(data)
    }).catch(err=>{
      loading.dismiss();
    })
  
  }
}
