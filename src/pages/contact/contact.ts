import { Component, OnInit } from '@angular/core';
import { NavController, Platform, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
    selector: 'contact',
    templateUrl: 'contact.html'
})

export class ContactPage implements OnInit {
    constructor(public navCtrl: NavController, private _platform: Platform) {
        this._platform.ready().then(() => {
            console.log('Hello Settings Page');
        });
    }

    ngOnInit(): void {
    }
}
