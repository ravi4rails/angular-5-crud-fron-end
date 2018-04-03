import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';
@Injectable()
export class UsersService {

  headers: Headers;
  options: RequestOptions;
  private userUrl = 'http://localhost:3000/users'

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type' : 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.userUrl)
      .map((response: Response) => <User[]>response.json())
  }

  getUser(id: number) {
    return this.http.get(this.userUrl + '/' + id + '.json')
  }

}
