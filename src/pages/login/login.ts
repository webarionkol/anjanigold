import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, LoadingController } from 'ionic-angular';
import { OtpPage } from '../otp/otp';
import { ApiProvider } from '../../providers/api/api';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginregPage } from '../loginreg/loginreg';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

validations_form: FormGroup;

  states:any;
  cities:any;

  state:any;
  city:any;

  loading:any;
  ports: any=[];
  port: any=[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modal:ViewController,
    public api:ApiProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController
  ) {
    this.ports = [
      { id: 1, name: 'Andaman and Nicobar Islands' },
      { id: 2, name: 'Andhra Pradesh' },
      { id: 3, name: 'Arunachal Pradesh' },
      { id: 4, name:'Assam'},
      { id: 29, name: 'Bihar' },
      { id: 5, name: 'Chandigarh' },
      { id: 6, name: 'Chhattisgarh' },
      { id: 7, name:'Dadra and Nagar Haveli'},
  
      { id: 8, name: 'Daman and Diu' },
      { id: 9, name: 'Delhi' },
      { id: 10, name: 'Goa' },
      { id: 11, name:'Gujarat'},
      { id: 12, name: 'Haryana' },
      { id: 13, name: 'Himachal Pradesh' },
      { id: 14, name: 'Jammu and Kashmir' },
      { id: 15, name:'Jharkhand'},
  
      { id: 16, name: 'Karnataka' },
      { id: 17, name: 'Kerala' },
      { id: 18, name: 'Lakshadweep' },
      { id: 19, name:'Madhya Pradesh'},
      { id: 20, name: 'Maharashtra' },
      { id: 21, name: 'Manipur' },
      { id: 22, name: 'Meghalaya' },
      { id: 23, name:'Mizorami'},
  
      { id: 24, name: 'Nagaland' },
      { id: 25, name: 'Orissa' },
      { id: 26, name: 'Pondicherry' },
      { id: 27, name:'Punjab'},
      { id: 28, name: 'Rajasthan' },
      { id: 29, name: 'Sikkim' },
  
      { id: 24, name: 'Tamil Nadu' },
      { id: 25, name: 'Tripura' },
      { id: 26, name: 'Uttaranchal' },
      { id: 27, name:'Uttar Pradesh'},
      { id: 28, name: 'West Bengal' },
  
  
  
  ];
    // this.api.getStateCity().then((data:any) => {
    //   console.log(data);
    //   this.states  = data.states;
    //   this.cities  = data.city;
    // });

  }

  register() {
    const animationsOptions = {
      animation: 'md-transition',
      duration: 1000
    }
    this.modal.dismiss()

    this.navCtrl.push(OtpPage, {}, animationsOptions);
  }

  onChangeState(){
    console.log(this.state); 
  }

  ionViewWillLoad() {

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      firmName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
       
      ])),
      mobile: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ])),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    },

    );

  }

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'firmName': [
      { type: 'required', message: 'Firm Name is required.' }
    ],
 
    'mobile': [
      { type: 'required', message: 'Mobile is required.' },
      { type: 'pattern', message: 'Enter a valid number' },
    ],
    'state': [
      { type: 'required', message: 'Please Select your state.' }
    ],
    'city': [
      { type: 'required', message: 'Please Select your city.' }
    ]
  };

  onSubmit(values) {
    this.showLoader();
    console.log(values);
    values.state=values.state.name;
    console.log(values)
    this.api.login(values).then((data:any) => {
      localStorage.setItem('UserData', JSON.stringify(data.user_data));
      // console.log(data);
      this.loading.dismiss();
       this.navCtrl.push(HomePage, {data: data.user_data});
    }) .catch(err=>{
      alert(JSON.stringify(err['error'].message))
      this.loading.dismiss();
    })
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
        content: 'Please Wait'
    });
    this.loading.present();
    }
    loginagain(){
      this.navCtrl.push(LoginregPage)
    }
}
