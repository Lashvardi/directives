//* Smart component

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users" (click)="selectUser(user)">
        {{ user.name }}
      </li>
    </ul>
  `,
})
export class UserListComponent implements OnInit {
  // ? EventEmmiter -ი გადასცემს Events შვილობილი კომპონენტიდან მშობელ კომპონენტს
  @Output() userSelected = new EventEmitter<any>();
  users = [] as any;

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.users = this._userService.getUsers();
  }

  //? გაუგზავნის მონიშნულ მონაცემებს მშობელ კომპონენტში
  selectUser(user: any) {
    this.userSelected.emit(user);
    console.log(user);
  }
}
