import { CalendarPage } from './calendar';
import { NgCalendarModule } from 'ionic2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  imports: [IonicPageModule.forChild(CalendarPage), NgCalendarModule],  //no forRoot here
  declarations: [CalendarPage],
  exports: [CalendarPage],
  entryComponents: [CalendarPage]  //<-- add all your module components to here
})
export class CalendarModule { }
