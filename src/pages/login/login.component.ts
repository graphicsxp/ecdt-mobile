import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginService } from '../shared/service/login-service';
import { RequestListComponent } from '../request/request-list/request-list.component'
import { SignupComponent } from '../signup/signup.component';

import { Auth } from '@ionic/cloud-angular';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    providers: [LoginService]
})
export class LoginComponent {
    signingUp: boolean = true;
    name: string;
    email: string = 'graphicsxp@gmail.com';
    password: string = 'welcome1';
    confirmPassword: string;
    errorMessage: string;
    loading: any;

    constructor(private _loginService: LoginService, private _loadingController: LoadingController, private _navController: NavController, private _auth: Auth) { }

    ionViewDidLoad() {

        // this.showLoader();

        // //Check if already authenticated
        // if (this._auth.isAuthenticated) {
        //     console.log("Already authorized");
        //     this.loading.dismiss();
        //     this._navController.setRoot(OrderFormListComponent);
        // }
        // else {
        //     console.log("Not already authorized");
        //     this.loading.dismiss();
        // }
    }

    login() {
        this.showLoader();
        this._auth.login("basic", { 'email': this.email, 'password': this.password }).then((res) => {
            this.loading.dismiss();
            this._navController.setRoot(RequestListComponent);
        }, (err) => {
            this.loading.dismiss();
            alert('Authentication failed.');
        });
    }

    showLoader() {
        this.loading = this._loadingController.create({
            content: 'Authenticating...'
        });

        this.loading.present();
    }

    launchSignup() {
        this._navController.push(SignupComponent);
    }
}