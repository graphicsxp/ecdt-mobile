import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { IOrderForm } from '../model/orderform-model';
import { BaseService } from '../../../providers/base.service';

@Injectable()
export class OrderFormService {
        
    constructor(private _baseService: BaseService<IOrderForm>) { 
        this._baseService.serviceUrl = './build/orderForms.json';
    } 

    getAll(): Observable<IOrderForm[]> {
        return this._baseService.getAll();
    }

    getById(id: number): Observable<IOrderForm>{
        return this._baseService.getById(id); 
    }
}