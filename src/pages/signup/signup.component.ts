import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController, LoadingController } from 'ionic-angular';
import { Auth } from '@ionic/cloud-angular';
import { RequestListComponent } from '../request/request-list/request-list.component';

@Component({
  selector: 'signup-page',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  user: FormGroup;
  loading: any;

  constructor(private _navController: NavController, public loadingCtrl: LoadingController, private _auth: Auth, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this._formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(2)]],
      account: this._formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    })

    // this.user = new FormGroup({
    //   fullname: new FormControl('initial value', [Validators.required, Validators.minLength(2)]),
    //   account: new FormGroup({
    //     email: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required),
    //     confirm: new FormControl('', Validators.required)
    //   })
    // });
  }

  register() {
    console.log(this.user.value, this.user.valid);

    this.showLoader();

    this._auth.signup({ 'name': this.user.get('fullname').value, 'email': this.user.get('account').get('email').value, 'password': this.user.get('account').get('password').value }).then(() => {
      return this._auth.login('basic', { 'email': this.user.get('account').get('email').value, 'password': this.user.get('account').get('password').value }).then(() => {
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
