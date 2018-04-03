import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user = new User<{id: number, name: string, email: string, contact: string, address: string, gender: string}>();
  constructor(private usersService: UsersService) { }
  ngOnInit() {
  }
  onSubmitUser(user: User) {
    this.submitted = true;
    this.usersService.createUser(user)
      .subscribe(data => {return true},
        error => {
          console.log("Error creating user");
          return Observable.throw(error);
        }
      )
  }
}
