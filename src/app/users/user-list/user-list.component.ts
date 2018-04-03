import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute} from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: User[];
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
      let timer = Observable.timer(0, 5000);
      timer.subscribe(() => this.getUsers());
      console.log(this.users)
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  showUser(user: User): void {
    let userLink = ['/users', user.id];
    this.router.navigate(userLink);
  }

}
