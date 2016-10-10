import {Injectable} from '@angular/core';
import {LoadingController, Loading} from 'ionic-angular';

@Injectable()
export class LoadingService {

  loading: Loading;

  constructor(private _loadingCtrl: LoadingController) { }

  presentLoading() {
    this.loading = this._loadingCtrl.create({
      content: "Please wait...",
      duration: 3000,
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }
}