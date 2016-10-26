import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, LoadingController } from 'ionic-angular';
import { Auth } from '@ionic/cloud-angular';
import { RequestListComponent } from '../request/request-list/request-list.component';

@Component({
  selector: 'signup-page',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  user: FormGroup;
  name: string;
  role: string;
  email: string;
  password: string;
  loading: any;

  constructor(private _navController: NavController, public loadingCtrl: LoadingController, private _auth: Auth) { }

  ngOnInit() {
    this.user = new FormGroup({
      fullname: new FormControl('initial value', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }

  register() {
    console.log(this.user.value, this.user.valid);

    this.showLoader();

    this._auth.signup({ 'name': this.name, 'email': this.email, 'password': this.password }).then(() => {
      return this._auth.login('basic', { 'email': this.email, 'password': this.password }).then(() => {
        this.loading.dismiss();

        this._navController.setRoot(RequestListComponent);
      });
    }, (err) => {
      this.loading.dismiss();

      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else {
          //handle other errors
        }
      }
    });
  }

  showLoader() {

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }
}
