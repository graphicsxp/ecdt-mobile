import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from  'rxjs/Observable'
import { IUser } from '../model/user-model'

@Injectable()
export class LoginService {
    private _userUrl = 'build/api/users/users.json';
    constructor(private _http: Http) { } 

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._userUrl) 
            .map((response: Response) => <IUser[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getUser(id: number): Observable<IUser>{
        return this.getUsers()
            .map((users: IUser[]) => users.find(p => p.id === id));
    }

    login(username: string, password: string): Observable<IUser>{
        return this.getUsers()
            .map((users: IUser[]) => users.find(p => p.username === username && p.password === password));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Service error');
    }
}