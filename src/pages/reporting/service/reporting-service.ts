import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from '../../shared/service/loading-service';

@Injectable()
export class ReportingService {
    private _simpleChartUrl = './build/simple-chart.json';
    private _stackedChartUrl = './build/stacked-chart.json';
    
    private _loadingService: LoadingService;

    constructor(private _http: Http, @Inject(LoadingService) loadingService: LoadingService) {
        this._loadingService = loadingService;
    }

    getSimpleChartData(): Observable<Object[]> {
        this._loadingService.presentLoading();
        return this._http.get(this._simpleChartUrl)
            .map((response: Response) => <Object[]>response.json())
            .finally(() => this._loadingService.hideLoading())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getStackedChartData(): Observable<Object[]> {
        this._loadingService.presentLoading();
        return this._http.get(this._stackedChartUrl)
            .map((response: Response) => <Object[]>response.json())
            .finally(() => this._loadingService.hideLoading())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Service error');
    }
}