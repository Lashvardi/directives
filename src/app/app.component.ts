import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'directives';

  selectedUser!: any;
  onUserSelected(user: any) {
    this.selectedUser = user;
  }

  categories = [
    {
      name: 'Electronics',
      products: [
        { name: 'Laptop', price: 800 },
        { name: 'Phone', price: 600 },
      ],
    },
    {
      name: 'Clothes',
      products: [
        { name: 'T-Shirt', price: 20 },
        { name: 'Jeans', price: 40 },
      ],
    },
  ];

  users = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
  ];

  messages = [
    { content: 'Hello!', isRead: false },
    { content: 'How are you?', isRead: false },
    { content: 'Goodbye!', isRead: false },
  ];
}
