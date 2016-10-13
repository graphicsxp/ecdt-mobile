import { IRequest } from '../model/request.model';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { RequestService } from '../service/request.service';

@Component({
    templateUrl: '../template/request-detail.component.html',
    providers: [RequestService]
})
export class RequestDetailComponent implements OnInit {
    myRequest: IRequest;
    errorMessage: string;

    constructor(private _navParams: NavParams,
        private _viewCtrl: ViewController,
        private _requestService: RequestService) { }

    //ionViewDidLoad() {
    ngOnInit(): void {
        this._requestService.getById(+this._navParams.get('id')).subscribe(
            orderForm => {
                this.myRequest = orderForm;
                console.log('get request successfully');
            }, 
            error => {
                console.log(error);
                this.errorMessage = <any>error;
            }
        );
    }

    dismiss() {
        this._viewCtrl.dismiss();
    }
}