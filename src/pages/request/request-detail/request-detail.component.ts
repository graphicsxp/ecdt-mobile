import { IRequest, IJob } from '../model/request.model';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { RequestService } from '../service/request.service';
import { Vibration, Transfer, FileOpener } from 'ionic-native';

@Component({
    selector: 'request-detail',
    templateUrl: './request-detail.component.html',
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

    openDelivery(job: IJob) {
        console.log('clicking on icon');

        let fileTransfer: Transfer = new Transfer();
<<<<<<< HEAD
        let targetPath = `${cordova.file.externalDataDirectory} ${this.myRequest.id}-${job.sourceLanguage}-${job.targetLanguage}`;
=======
        // // var cordova: any;
        // // const fs:string = cordova.file.dataDirectory;
        let targetPath = `${cordova.file.dataDirectory} ${this.myRequest.id}-${job.sourceLanguage}-${job.targetLanguage}`;
>>>>>>> dc2022684ab8a9ab908b1016a0f07fce23a53e92

        fileTransfer.download(job.deliveryUrl, targetPath).then((res) => {
            console.log('the file was downloaded successfully:' + res);
            FileOpener.open(targetPath, 'application/pdf').then((res) => {
                console.log('the file was opened successfully:' + res);
            }).catch(err => {
                console.log('an error occured while opening the file:' + err)
            });
            Vibration.vibrate(1500);
        }).catch((err) => {
            console.log('an error occured while downloading the file:' + err)
            Vibration.vibrate(100);
        });
    }

    dismiss() {
        this._viewCtrl.dismiss();
    }
}
