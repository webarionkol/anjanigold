import { Component } from '@angular/core';
import { NavController, ModalController, Platform, LoadingController, Loading } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ApiProvider } from '../../providers/api/api';
import { AdvmodPage } from '../advmod/advmod';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  metal_cost:any = false;
  metals:any = false;
  UserData:any;
  old:any = false; 
  loading:Loading;
  banners:any;
  whatsapp:any;
  fb:any;
  marqu:any;
  intervals:any;
  modalMy: any;
  constructor(
    public navCtrl: NavController,
    public modal:ModalController,
    public api: ApiProvider,
    public loadingCtrl:LoadingController,public platform:Platform ) 
  {

    document.addEventListener("pause", this.onPause, false);
    document.addEventListener("resume", this.onResume, false);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });loading.present();
    this.api.getContact().then(data=>{
      console.log(data)
      this.whatsapp=data['contactus'][5].content_value;
      this.fb=data['contactus'][3].content_value;
    
      console.log(data)
    }).catch(err=>{
      console.log(err)
    }).then(()=>{
      loading.dismiss();
    })
   
    this.api.getMarquee().then(data=>{
      
        this.marqu=data['page_det'].content_value;
        console.log(this.marqu)
      })

    this.UserData = JSON.parse(localStorage.getItem('UserData'));

          
  }
   
  
  ionViewWillEnter() {
    console.log("enter")
    this.api.getAdv().then(data=>{
      console.log(data['ads'].length)

      if(data['ads'].length=="0"){

      }
      else{
        this.intervals= setInterval( () => {
    
          this.modalMy = this.modal.create(AdvmodPage);
          this.modalMy.present()
      
   }, 170000);  
      }
    })
  
 
    this.api.getBanner().then((data:any) => {
     this.banners=data['banners'];
     
      console.log(this.banners);
      // this.metal_cost  = data.metal_cost;
    });
    this.api.addRate().then((data:any) => {
      
      console.log(data);
      this.metal_cost  = data.metal_cost;
    }).catch(err=>{
      console.log(JSON.stringify(err))
    })

    this.getRates();
  }


  getRates(){
   
    this.old = this.metals;

    this.api.rates().then((data) => {
     
      if(data)
      this.metals = data;
    }, (err) => {
     console.log(err);
    })

        setTimeout( () => {
           this.getRates();
      }, 2000);   
     
  }
  sum(a, b){
    return parseInt(a) + parseInt(b);
  }

  onPause()
  {
    this.modalMy = 1;
    console.log(this.intervals)
    clearInterval(this.intervals);
  
    console.log("testtest")
  }

  onResume()
  {
    this.modalMy = null;
  }

  
}
