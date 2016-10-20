import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IRequest } from '../model/request.model';
import { BaseService } from '../../../providers/base.service';
import { LoadingService } from '../../shared/service/loading-service';

@Injectable()
export class RequestService extends BaseService<IRequest> {

  constructor(_http: Http, @Inject(LoadingService) loadingService: LoadingService) {
    super(_http, loadingService);
    this.serviceUrl = './build/requests.json';
  }

  getAll(): Observable<IRequest[]> {
    return super.getAll();
  }

  getById(id: number): Observable<IRequest> {
    return super.getById(id);
  }
}
