import { Component, inject } from '@angular/core';
import { UsersDataService } from './data/users-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  dataService = inject(UsersDataService);

  users$ = this.dataService.fetchUsers();
}
