//* Dumb component

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <div *ngIf="user">
      <h2>{{ user.name }}'s Details</h2>
      <div><label>ID: </label>{{ user.id }}</div>
      <div><label>Email: </label>{{ user.email }}</div>
    </div>
  `,
})
export class UserDetailComponent {
  @Input() user!: any;
}
