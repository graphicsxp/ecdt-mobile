import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { ThreeDeeTouch, /*ThreeDeeTouchForceTouch,*/ ThreeDeeTouchQuickAction } from 'ionic-native';

@Injectable()
export class QuickActionService {
  public onHomeIconPressed: Observable<any>;
  private _dataObserver: Observer<any>;
  constructor(platform: Platform) {
    
    platform.ready().then(() => {
      this.onHomeIconPressed = new Observable(observer => this._dataObserver = observer);
      ThreeDeeTouch.isAvailable().then(isAvailable =>  {
            console.log('3D Touch available? ' + isAvailable);
            // ThreeDeeTouch.watchForceTouches()
            // .subscribe(
            //     (data: ThreeDeeTouchForceTouch) => {
            //     console.log("Force touch %" + data.force);
            //     console.log("Force touch timestamp: " + data.timestamp);
            //     console.log("Force touch x: " + data.x);
            //     console.log("Force touch y: " + data.y);
            //     }
            // );

            let actions: Array<ThreeDeeTouchQuickAction> = [
            {
                type: 'settings',
                title: 'Settings',
                subtitle: 'Quickly access settings',
                iconType: 'Home'
            },
            {
                type: 'requests',
                title: 'Requests',
                subtitle: 'Quickly access requests',
                iconType: 'Home'
            },
            {
                type: 'reports',
                title: 'Reports',
                subtitle: 'Quickly access reports',
                iconType: 'Home'
            }
            ];
            ThreeDeeTouch.configureQuickActions(actions);
            
            /// if 3Dtouch is supported, we subscribe and feed the data observable
            ThreeDeeTouch.onHomeIconPressed().subscribe(
                (payload) => {
                    // returns an object that is the button you presed
                    console.log('Pressed the ${payload.title} button')
                    console.log(payload.type);
                    this._dataObserver.next(payload.type);
                }
            );
        });
    });
  }

  ngOnDestroy() {
  }
}
