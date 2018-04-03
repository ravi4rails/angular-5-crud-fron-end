import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../user';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  id: number;
  routeId: any;
  returnUrl: string;
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/users'
    this.routeId = this.route.params
      .subscribe(
        params => {
          console.log(+params['id']);
          this.id = +params['id'];
        }
      )
    let userRequest = this.route.params
      .flatMap((params: Params) =>
        this.usersService.getUser(+params['id'])
      );
    userRequest.subscribe(
      response => this.user = response.json()
    );
  }
}
