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

  createUser(user: User): Observable<User> {
    return this.http.post(this.userUrl, JSON.stringify(user), this.options)
      .map((res: Response) => res.json());
  }

  deleteUser(id: number): Observable<User> {
    const url  = `${this.userUrl}/${id}`;
    return this.http.delete(url, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateUser(user: User): Observable<User> {
    const url  = `${this.userUrl}/${user.id}`;
    return this.http.put(url, JSON.stringify(user),
      this.options)
        .map((res: Response) => res.json());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
