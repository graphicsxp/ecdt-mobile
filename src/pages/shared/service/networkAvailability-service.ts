import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { LoadingService } from './loading-service';

@Injectable()
export class NetworkAvailabilityService {
  private _disconnectSubscription: any;
  private _connectSubscription: any;
  private _connected: boolean;

  constructor(platform:Platform, loadingService: LoadingService) {
    platform.ready().then(() => {
      this._connected = this.networkAvailable();
      console.log('subscribing to network events');
      this._disconnectSubscription = Network.onDisconnect().subscribe(() => {
        console.log('network disconnected:' + Network.type);
        setTimeout(() => {
          if (Network.type === 'none' && this._connected === true) {
            this._connected = false;
            console.log('network disconnected handled:' + Network.type);
            loadingService.presentNetworkNotAvailableLoading();
          }
        }, 1500);
      });
      this._connectSubscription = Network.onConnect().subscribe(() => {
        console.log('network connected:' + Network.type);
        setTimeout(() => {
          if (Network.type !== 'none' && this._connected === false) {
            this._connected = true;
            console.log('network connected handled:' + Network.type);
            loadingService.hideNetworkLoading();
          }
        }, 1500);
      });
    });
  }

  ngOnDestroy() {
    console.log('unsubscribing network event');
    this._connectSubscription.unsubscribe();
    this._disconnectSubscription.unsubscribe();
  }

  networkAvailable() {
    return Network.type != 'none';
  }
}
