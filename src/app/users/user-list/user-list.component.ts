import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  private users: User[];
  ngOnInit() {
    this.users = this.usersService.getUsers();
    console.log(this.users);
  }
}
