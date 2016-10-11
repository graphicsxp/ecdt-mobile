import { Component, OnInit} from '@angular/core';
import { IOrderForm } from '../model/orderForm-model';
import { NavController, ModalController } from 'ionic-angular';
import { OrderFormDetailComponent } from './orderForm-detail.component';
import { OrderFormService } from '../service/orderForm-service';
import { LoadingService } from '../../shared/service/loading-service';
import { Vibration, Badge, Transfer, File, FileOpener } from 'ionic-native';

//import * as  _ from 'lodash';

declare var cordova: any;

@Component({
    templateUrl: '../template/orderForm-list.component.html',
    providers: [OrderFormService, LoadingService]
})
export class OrderFormListComponent 
    implements OnInit {

    orderForms: IOrderForm[] = [];
    errorMessage: string;

    constructor(private _orderFormService: OrderFormService, 
                private _modalCtrl: ModalController,
                private _navCtrl: NavController) { }

    ngOnInit(): void {
        this._orderFormService.getOrderForms()
            .subscribe(
                orderForms => this.orderForms = orderForms,
                error => this.errorMessage = <any>error
            );
    }

    itemSelected(item: IOrderForm): void {        
        this._navCtrl.push(OrderFormDetailComponent, {id: item.id})
        //let modal = this._modalCtrl.create(OrderFormDetailComponent, item);
        //modal.present();
    }

    openOrderForm(item: IOrderForm): void {
        console.log('clicking on icon');
        
         let fileTransfer: Transfer = new Transfer();
        // // var cordova: any;
        // // const fs:string = cordova.file.dataDirectory;
        let targetPath = cordova.file.externalDataDirectory + 'myOrderForm.pdf';

        fileTransfer.download('http://www.sam-dev.net/wp-content/uploads/doc.pdf', targetPath).then((res) => {
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
}
