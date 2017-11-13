import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { LoadingService } from './loading-service';

@Injectable()
export class NetworkAvailabilityService {
  private _disconnectSubscription: any;
  private _connectSubscription: any;
  private _connected: boolean;
  private _network: Network;

  constructor(platform:Platform,
    loadingService: LoadingService,
    network: Network) {
    this._network = network;
    platform.ready().then(() => {
      this._connected = this.networkAvailable();
      console.log('subscribing to network events');
      this._disconnectSubscription = network.onDisconnect().subscribe(() => {
        console.log('network disconnected:' + network.type);
        setTimeout(() => {
          if (network.type === 'none' && this._connected === true) {
            this._connected = false;
            console.log('network disconnected handled:' + network.type);
            loadingService.presentNetworkNotAvailableLoading();
          }
        }, 1500);
      });
      this._connectSubscription = network.onConnect().subscribe(() => {
        console.log('network connected:' + network.type);
        setTimeout(() => {
          if (network.type !== 'none' && this._connected === false) {
            this._connected = true;
            console.log('network connected handled:' + network.type);
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
    return this._network.type != 'none';
  }
}
