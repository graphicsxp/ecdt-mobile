import { IRequest, IJob } from '../model/request.model';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';
import { RequestService } from '../service/request.service';
import { Vibration } from '@ionic-native/vibration';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';

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
        private _requestService: RequestService,
        private _platform: Platform,
        private vibration: Vibration,
        private file: File,
        private transfer: FileTransfer,
        private fileOpener: FileOpener) {
        }

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

        let fileTransfer = this.transfer.create();
        // check if ios or android
        let targetPath=null;
        if(this._platform.is('ios')){
            targetPath = `${this.file.dataDirectory}${this.myRequest.id}-${job.sourceLanguage}-${job.targetLanguage}.pdf`;
        }else{
            targetPath = `${this.file.externalDataDirectory}${this.myRequest.id}-${job.sourceLanguage}-${job.targetLanguage}.pdf`;
        }
        console.log(targetPath);
        console.log(this._platform);
        fileTransfer.download(job.deliveryUrl, targetPath).then((res) => {
            console.log('the file was downloaded successfully:' + res);
            this.fileOpener.open(targetPath, 'application/pdf').then((res) => {
                console.log('the file was opened successfully:' + res);
            }).catch(err => {
                console.log('an error occured while opening the file:' + err)
            });
            this.vibration.vibrate(1500);
        }).catch((err) => {
            console.log('an error occured while downloading the file:' + JSON.stringify(err, null, 2))
            this.vibration.vibrate(100);
        });
    }

    dismiss() {
        this._viewCtrl.dismiss();
    }
}
