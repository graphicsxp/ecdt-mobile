import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LoadingService } from '../pages/shared/service/loading-service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export interface IBase {
    id: number;
}

@Injectable()
export abstract class BaseService<T extends IBase> {
  private _loadingService: LoadingService;
  public serviceUrl
  constructor(private _http: Http, @Inject(LoadingService) loadingService: LoadingService) {
    console.log('Hello BaseService Provider');
    this._loadingService = loadingService;
  }

  getAll(): Observable<T[]> {
    this._loadingService.presentLoading();
    return this._http.get(this.serviceUrl)
      .map((response: Response) => <T[]>response.json())
      .finally(() => this._loadingService.hideLoading())
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getById(id: number): Observable<T> {
    return this.getAll()
      .map((items: T[]) => items.find(p => p.id === id));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Service error');
  }
}
