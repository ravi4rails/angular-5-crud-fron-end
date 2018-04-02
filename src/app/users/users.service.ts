import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from './user';
@Injectable()
export class UsersService {
  usersChanged = new Subject<User[]>();
  constructor() { }

  private users = [
    new User(1, "Ravi Kumar Singh", "ravi@mailinator.com", "9859489589", "58-B Sheetal Nagar, Vijaynagar",  "Male"),
    new User(2, "Rawal Jatan Singh", "rawal@mailinator.com", "9856789589", "Carnage Road, Vijaynagar", "Male"),
    new User(3, "Arjun Singh", "arjun@mailinator.com", "9811489589", "Kila Road", "Male"),
    new User(4, "Nikita Pandey", "nikita@mailinator.com", "9859449589", "Meera Road 76/2B, Vijaynagar",  "Female")
  ]

  getUsers() {
    return this.users;
  }

  getUser(index: number) {
    return this.users[index];
  }

}
