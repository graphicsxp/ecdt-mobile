import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, IonicPage } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the CalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  viewTitle;
  eventSource = [];
  selectedDay = new Date();
  calendar = {
    mode: 'day',
    modeIndex: 0,
    modes: ['day', 'week', 'month'],
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController) {
    if (navParams.data) {
      this.addEvent(navParams.data.title, navParams.data.taskType, navParams.data.taskDeadline);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  addEvent(title, taskType, startTime) {
    let eventData = { title: title, startTime: new Date(startTime), endTime: moment(new Date(startTime)).add(30, 'm').toDate() };

    let events = this.eventSource;
    events.push(eventData);
    this.eventSource = [];
    this.eventSource = events;
  }

  switchMode() {
    this.calendar.modeIndex = this.calendar.modeIndex === this.calendar.modes.length - 1 ? 0 : this.calendar.modeIndex + 1;
    this.calendar.mode = this.calendar.modes[this.calendar.modeIndex];
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

}
