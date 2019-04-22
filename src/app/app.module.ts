import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { AlertPage } from '../pages/alert/alert';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { EventPage } from '../pages/event/event';
import { BankPage } from '../pages/bank/bank';
import { ContactPage } from '../pages/contact/contact';
import { NewsPage } from '../pages/news/news';
import { EventlistPage } from '../pages/eventlist/eventlist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { OneSignal } from '@ionic-native/onesignal';
import { AboutappPage } from '../pages/aboutapp/aboutapp';
import { AdvmodPage } from '../pages/advmod/advmod';
import { AboutdetlsPage } from '../pages/aboutdetls/aboutdetls';
import { TermsPage } from '../pages/terms/terms';
import { MeetteamPage } from '../pages/meetteam/meetteam';
import { KycformPage } from '../pages/kycform/kycform';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { LoginregPage } from '../pages/loginreg/loginreg';


import { File } from '@ionic-native/file';
// import { Transfer } from '@ionic-native/transfer';
// import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { RestProvider } from '../providers/rest/rest';
// import { Network } from '@ionic-native/network/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginregPage,
   
    LoginPage,
    OtpPage,
    ListPage,
    AboutdetlsPage,
    TermsPage,
    NewsPage,
    AboutappPage,
    EventlistPage,
    AdvmodPage,
    MeetteamPage,
    KycformPage,
    AlertPage,AboutusPage,EventPage,BankPage,ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MeetteamPage,
    OtpPage,
    ListPage,
    AdvmodPage,
    NewsPage,
    EventlistPage,
    AboutappPage,
    AboutdetlsPage,
    KycformPage,
    TermsPage,
    LoginregPage,

    AlertPage,AboutusPage,EventPage,BankPage,ContactPage
  ],
  providers: [
    StatusBar,
    OneSignal,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    FileTransfer,
    // Network,
    //  AndroidPermissions,
    FileTransferObject,
    File,
    Camera,
    RestProvider,
  
    
  ]
})
export class AppModule {}
