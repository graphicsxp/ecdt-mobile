import { IRequest } from '../model/request.model';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { RequestService } from '../service/request.service';

@Component({
    templateUrl: '../template/request-detail.component.html',
    providers: [RequestService]
})
export class RequestDetailComponent {
    myRequest: IRequest;
    errorMessage: string;

    constructor(private _navParams: NavParams,
        private _viewCtrl: ViewController,
        private _requestService: RequestService) { }

    ionViewDidLoad() {
        this._requestService.getById(+this._navParams.get('id')).subscribe(
            orderForm => this.myRequest = orderForm,
            error => this.errorMessage = <any>error
        );
    }

    dismiss() {
        this._viewCtrl.dismiss();
    }
}