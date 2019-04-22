import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, LoadingController, Events } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ApiProvider } from '../../providers/api/api';


import { File, } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-kycform',
  templateUrl: 'kycform.html',
})
export class KycformPage {
  imageURIShop:any = "";
  imageURIShop2:any="";
  imageURIShop3:any="";
  imageURIShop4:any="";
  
  registerForm = {
   'companyname': '', 
   'clientname': '',
   'address': '', 
   'name1': '',
   'name2': '', 
   'mobile':'',
   'mobile2': '',
   'office1': '',
   'office2': '',
   'email': '',
   'residence':'',
   'bname': '',
   'Branch': '',
   'acno': '',
   'ifsc': '',
   'tinno': '',
   'panno':'',
   'gst_no':'',
   'Reference': ''
   
 }
 idget:any;

  constructor(public toastCtrl:ToastController,public rest:ApiProvider,private transfer: FileTransfer,public events: Events,
    private file: File,public navCtrl: NavController, public navParams: NavParams, 
    public restProvider: ApiProvider, public loadingCtrl: LoadingController, 
    public toastController: ToastController,public actionSheetCtrl: ActionSheetController,
     public camera: Camera) {
  }
  changeListener($event) : void {
    // this.file = $event.target.files[0];
    console.log($event._value);

    var form = new FormData();
    form.append("logo", $event._value);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad KycformPage');
  }
  public openImages(param){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
       
        {
          text: 'Use Camera',
          handler: () => {
          this.getImage(this.camera.PictureSourceType.CAMERA, param);
          }
        },
        {
          text: 'Use Gallery',
          handler: () => {
            // this.getImage(this.camera.PictureSourceType.SAVEDPHOTOALBUM,param);
          this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY,param);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


  getImage(source, param) {
    console.log("gii"+source);
  
    const options: CameraOptions = {
      quality: 90,
      allowEdit: true,
      sourceType: source,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      destinationType: this.camera.DestinationType.FILE_URI
    }
 
    this.camera.getPicture(options).then((imageData) => {
      let filename = imageData.substring(imageData.lastIndexOf('/')+1);
      let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
      console.log("path"+path);  
      console.log("filename"+filename.split("?")[0]);
      filename=filename.split("?")[0];
      //then use the method reasDataURL  btw. var_picture is ur image variable
           this.file.readAsDataURL(path, filename).then(data=>{
           

            if(param == 'AddressProof'){
              this.imageURIShop= data;
           
            }
            else if(param == 'PANNoScanCopy'){
              this.imageURIShop2 = data;
      
            }
            else if(param == 'TINNoScanCopy'){
              this.imageURIShop3 = data;
            }
            else{
              this.imageURIShop4 = data;
            }
            

           } ).catch(err=>{


             console.log(JSON.stringify(err))
           })
            

    }, (err) => {
      console.log(JSON.stringify(err));
     
    }); 
    
  }
 
submit(){
  if(this.registerForm.companyname && this.registerForm.clientname && this.registerForm.address ){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    console.log(JSON.stringify(this.registerForm))
    this.rest.kyc(this.registerForm).then(data=>{
      console.log(data)
  
     if(data['user_data'].id){
      loading.dismiss();
       this.idget=data['user_data'].id;
        this.restProvider.uploadFile({'key': 'address_proof', 'name': 'address.jpg', 'id': this.idget, 'imageURI': this.imageURIShop})
          this.restProvider.uploadFile({'key': 'pan_card', 'name': 'pan_card.jpg', 'id': this.idget, 'imageURI': this.imageURIShop2})
            this.restProvider.uploadFile({'key': 'tin_copy', 'name': 'tin_copy.jpg', 'id': this.idget, 'imageURI': this.imageURIShop3})
              this.restProvider.uploadFile({'key': 'partnership', 'name': 'partnership.jpg', 'id': this.idget, 'imageURI': this.imageURIShop4})
              let dissmiss = 0;
              this.events.subscribe('address_proof', (status) => {
                // user and time are the same arguments passed in `events.publish(user, time)`
                console.log('Welcome', status);
             
                })
            
              this.navCtrl.setRoot(HomePage)
     }
    
    }).catch(err=>{
     alert(
       JSON.stringify(err)
     )
    })
  }
  else{
    const toast = this.toastCtrl.create({
      message: 'Please fill the mandatory fields',
      duration: 3000
    });
    toast.present();
  }
 

}
}
