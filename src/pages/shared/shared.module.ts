import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HeaderComponent} from './component/header.component';
import {LoadingService} from './service/loading-service';
import {NetworkAvailabilityService} from './service/networkAvailability-service';
import {LoginService} from './service/login-service';
import {QuickActionService} from './service/quickAction-service';

@NgModule({
  imports: [IonicPageModule.forChild(HeaderComponent)],  // no forRoot here
  declarations: [HeaderComponent],
  providers: [LoadingService, NetworkAvailabilityService, LoginService, QuickActionService],
  exports: [HeaderComponent],
  entryComponents: [HeaderComponent]  // <-- add all your module components to here
})

export class SharedModule {

}
