import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { EventPage } from '../pages/event/event';
import { AlertPage } from '../pages/alert/alert';
import { BankPage } from '../pages/bank/bank';
import { ContactPage } from '../pages/contact/contact';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { NewsPage } from '../pages/news/news';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { oneSignalAppId, sender_id } from '../config';
import { AboutappPage } from '../pages/aboutapp/aboutapp';
import { KycformPage } from '../pages/kycform/kycform';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';

// import { Network } from '@ionic-native/network/ngx';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;
  public alertShown:boolean = false;
  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public toast:ToastController,public alertCtrl:AlertController,private oneSignal: OneSignal,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
 
    if(localStorage.getItem('UserData')){
       this.rootPage=HomePage;
    }
    else{
     this.rootPage=LoginPage;
    }
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'ios-home-outline' },
      { title: 'Kyc Form', component: KycformPage, icon: 'ios-document' },
      { title: 'Events', component: EventPage, icon: 'ios-calendar-outline' },
      { title: 'Analysis', component: AlertPage, icon: 'ios-funnel-outline' },
      { title: 'News & Notification', component:NewsPage, icon: 'ios-notifications-outline' },
      { title: 'Bank Details', component: BankPage, icon: 'ios-paper-outline' },
      { title: 'Booking Details', component: ContactPage, icon: 'ios-call-outline' },
      { title: 'About Us', component: AboutappPage, icon: 'ios-information-circle-outline' },
      { title: 'About Developer', component: AboutusPage, icon: 'ios-code-working' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      // this.platform.registerBackButtonAction(() => {
      //   if (this.alertShown==false) {
      //     this.presentConfirm();  
      //   }
      // }, 0)
        console.log("Sss")
    
      if (isCordovaAvailable()){
      
        this.oneSignal.startInit(oneSignalAppId, sender_id);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();
      }
      
      this.statusBar.backgroundColorByHexString('#ffb53d');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  private onPushReceived(payload: OSNotificationPayload) {
    console.log(JSON.stringify(payload.additionalData['type']));
    let alert = this.alertCtrl.create({
      title: 'Notification',
      cssClass:'alertCustomCss',
      subTitle: payload.body,
      buttons: 		[		{
        text: 'Okay',
        cssClass: 'buttoncss',
        handler: ()=>{
          if(payload.additionalData['type']=="event"){
            this.nav.push(EventPage)
          }
          else if(payload.additionalData['type']=="cost"){

          }
          else{
            this.nav.push(NewsPage)
          }
          // this.nav.push(ProdectPage,{catkey:notification.catname, subcatkey: notification.subcatname, subsubcatkey: notification.subsubcatname,subcatname:notification.subsubcatname})
        }
        }
      ]
    });
    alert.present();
   
  }
  
  private onPushOpened(payload: OSNotificationPayload) {
    console.log(JSON.stringify(payload.additionalData['type']));
    let alert = this.alertCtrl.create({
      title: 'Notification',
      cssClass:'alertCustomCss',
      subTitle: payload.body,
      buttons: 		[		{
        text: 'Okay',
        cssClass: 'buttoncss',
        handler: ()=>{
          if(payload.additionalData['type']=="event"){
            this.nav.push(EventPage)
          }
          else if(JSON.stringify(payload.additionalData['type'])=="cost"){
            this.nav.setRoot(HomePage)
          }
          else{
            this.nav.push(NewsPage)
          }
          // this.nav.push(ProdectPage,{catkey:notification.catname, subcatkey: notification.subcatname, subsubcatkey: notification.subsubcatname,subcatname:notification.subsubcatname})
        }
        }
      ]
    });
    alert.present();
   
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
     alert.present().then(()=>{
      this.alertShown=true;
    });
  }
}
