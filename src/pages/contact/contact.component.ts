import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit {
    constructor(public navCtrl: NavController, private _platform: Platform) {
        this._platform.ready().then(() => {
            console.log('Hello Settings Page');
        });
    }

    ngOnInit(): void {
    }
}