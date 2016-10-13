import {Component, Input, Output, EventEmitter } from '@angular/core';
import {Auth, User} from '@ionic/cloud-angular';
import { Nav, MenuController } from 'ionic-angular';
import { OrderFormListComponent } from '../../orderForm/component/orderForm-list.component';
import { LoginComponent } from './login.component';

@Component({
    templateUrl: '../template/menu.component.html',
    selector: 'cdt-menu'
})
export class MenuComponent {
    @Input() nav: Nav;
    @Input() content: string;
    @Output() menuClicked: EventEmitter<string> = new EventEmitter<string>();
    pages: Array<{ title: string, component: any }>;
    username: string;

    constructor(private _auth: Auth, private _user: User, private _menuCtrl: MenuController) {

        let menu: any;

        if (this._auth.isAuthenticated()) {
            menu = { title: 'Welcome ' + this._user.details.name + ' (Logout)', component: null }
        } else {
            menu = { title: 'Login', component: LoginComponent }
        }

        // used for an example of ngFor and navigation 
        this.pages = [
            menu,
            { title: 'Order Forms', component: OrderFormListComponent }
        ];

        this.username = this._user.details.username;
    }

    openPage(component) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        switch (component) {
            case 'OrderFormListComponent':
                this.nav.setRoot(OrderFormListComponent);
                break;
            case '':
                this._menuCtrl.close();
                break;
        }
    }

    logout(){
        this._auth.logout();
        this.nav.setRoot(LoginComponent);
        this._menuCtrl.close();
    }
}