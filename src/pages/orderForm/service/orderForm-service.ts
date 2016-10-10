import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from  'rxjs/Observable';
import { IOrderForm } from '../model/orderform-model';
import { LoadingService } from '../../shared/service/loading-service';

@Injectable()
export class OrderFormService {
    private _orderFormUrl = './build/orderForms.json';
    private _loadingService: LoadingService;
    
    constructor(private _http: Http,  @Inject(LoadingService) loadingService: LoadingService) { 
        this._loadingService  = loadingService;
    } 

    getOrderForms(): Observable<IOrderForm[]> {
        this._loadingService.presentLoading();
        return this._http.get(this._orderFormUrl) 
            .map((response: Response) => <IOrderForm[]>response.json())
            .finally(() => this._loadingService.hideLoading())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOrderForm(id: number): Observable<IOrderForm>{
        return this.getOrderForms()
            .map((orderForms: IOrderForm[]) => orderForms.find(p => p.id === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Service error');
    }
}