import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users = [
    { id: 1, name: 'Giorgi', email: 'Giorgi@Gmail.com' },
    { id: 2, name: 'Levani', email: 'Levani@Gmail.com' },
    { id: 3, name: 'Nika', email: 'Nika@Gmail.com' },
  ];

  getUsers() {
    return this._users;
  }
}
