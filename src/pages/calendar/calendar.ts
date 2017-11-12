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
    currentDate: new Date(),
    dateFormatter: {
      formatDayViewHourColumn: function(date:Date) {
        return moment(date).format('ha')
      },
      formatWeekViewHourColumn: function(date:Date) {
        return moment(date).format('ha')
      },
      formatWeekViewTitle: function(date:Date) {
        var d=moment(date);
        return d.format('MMMM YYYY')+", Week "+d.format("W");
      }
  }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.addEvent();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  addEvent() {
    let eventData = { title: "You have received a new task", startTime: new Date(2017, 10, 7, 11, 45), endTime: new Date(2017, 10, 7, 11, 55) };

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
