import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File, } from '@ionic-native/file';
import { Events } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/ 
@Injectable()
export class ApiProvider {

  // apiUrl:string = 'http://anjanigold.dot2door.in/welcome/';
  apiUrl:string= 'http://anjanigold.co.in/welcome/'
  constructor(public http: HttpClient,private transfer: FileTransfer,public events: Events) {
    console.log('Hello ApiProvider Provider');
  }

  rates()  
  { 
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'liveRates')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addRate()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'addRate')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStateCity()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'stateCity')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getEvents()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getEvents')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getNotifications()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getNotifications')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAnalysis()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getAnalysis')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getBanner()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getBanners')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getAdv()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getAds')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  signIn(data){
    var formData = new FormData();
    formData.append('mobile', data);
   
    console.log(data);
   // console.log(formData);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'signIn', formData)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  login(data)  
  {
    var formData = new FormData();
    formData.append('name', data.name);
    formData.append('firm_name', data.firmName);
    formData.append('mobile', data.mobile);
    formData.append('email', data.email);
    formData.append('city', data.city);
    formData.append('state', data.state);
    console.log(data);
   // console.log(formData);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'login', formData)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAboutUs(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getAboutUs')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getTerms(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getTnC')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getContact(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getContact')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getMeetTeam(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getTeam')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  Bank(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getBank')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
   kyc(data){
   console.log(data)
  var formData = new FormData();
  formData.append('company_name', data.companyname);
  formData.append('client_name', data.clientname);
  formData.append('address', data.address);
  formData.append('name1', data.name1);
  formData.append('name2', data.name2);
  formData.append('mobile1', data.mobile);
  formData.append('mobile2', data.mobile2);
  formData.append('office1', data.office1);
  formData.append('office2', data.office2);
  formData.append('email', data.email);
  formData.append('residence', data.residence);
  formData.append('bank_name', data.bname);
  formData.append('gst_no', data.gst_no);
  formData.append('branch_name', data.Branch);
  formData.append('account_number', data.acno);
  formData.append('ifsc_code', data.ifsc);
  formData.append('tin_no', data.tinno);
  formData.append('pan_no', data.panno);
  formData.append('reference', data.Reference);
  console.log(data);
 // console.log(formData);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'kyc', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
uplodeimage(data){
  var formData = new FormData();
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'userFiles', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

uploadFile(image) {
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options: FileUploadOptions = {
    fileKey: image.key,
    fileName: image.name,
    chunkedMode: false,
    httpMethod: 'POST', 
    mimeType: "image/jpeg",
    headers: {},
    params:{
      'id': image.id,
      'key': image.key
    }
  }

  fileTransfer.upload(image.imageURI, this.apiUrl+'/userFiles', options)
    .then((data) => {
      console.log(JSON.stringify(data));
     // this.events.publish(image.key, "success");
  }, (err) => {
    console.log(JSON.stringify(err));
    // this.events.publish(image.key, "fail");
  });
}

resend(data){
  console.log(data)
  var formData = new FormData();
  formData.append('mobile', data);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'resendOtp', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
getMarquee(){
 
  return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+'getMarquee')
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
}
