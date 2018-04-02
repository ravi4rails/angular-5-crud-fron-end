import { Component, OnInit, Input } from '@angular/core';
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
    this.usersService.usersChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
          console.log(users);
          console.log(this.users);
        }
      )
      this.users = this.usersService.getUsers();
      console.log(this.users)
  }
}
