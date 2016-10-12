import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRequest } from '../model/request.model';
import { BaseService } from '../../../providers/base.service';

@Injectable()
export class RequestService {

    constructor(private _baseService: BaseService<IRequest>) {
        this._baseService.serviceUrl = './build/requests.json'
    }

    getAll(): Observable<IRequest[]> {
        return this._baseService.getAll();
    }

    getById(id: number): Observable<IRequest> {
        return this._baseService.getById(id);
    }
}