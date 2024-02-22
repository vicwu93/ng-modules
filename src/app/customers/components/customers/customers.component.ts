import { Component, OnInit } from '@angular/core';

import { CustomersService } from '../../../services/customers.service';
import { UserService } from '../../../services/user.service';

@Component({
  templateUrl: './customers.component.html',
  // providers: [UserService],
})
export class CustomersComponent implements OnInit {
  userName = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userName = this.userService.userName;
  }
}
