import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestService } from '../service/request.service';
import { IRequest } from '../model/request.model';
import { RequestDetailComponent } from '../request-detail/request-detail.component';

@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  providers: [RequestService]
})
export class RequestListComponent implements OnInit {
  requests: IRequest[] = [];
  errorMessage: string;

  constructor(private _requestService: RequestService, private _navCtrl: NavController) { }

  //ionViewDidLoad() {
  ngOnInit(): void {
    console.log('Hello Request Page');

    this._requestService.getAll()
      .subscribe(
      requests => this.requests = requests,
      error => this.errorMessage = <any>error
      );
  }

  itemSelected(item: IRequest): void {
    this._navCtrl.push(RequestDetailComponent, { id: item.id })
  }

}
