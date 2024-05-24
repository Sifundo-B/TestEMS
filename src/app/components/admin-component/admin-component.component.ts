import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.scss']
})
export class AdminComponentComponent implements OnInit {
  users: User[] = [];
  user: User = new User();

  constructor(private adminService: AdminServiceService, private userService: UserServiceService) {}

  ngOnInit() {
    this.userService.getAllEmployees().subscribe(users => {
      this.users = users;
    });
  }

  onAddEmployee() {
    this.adminService.addEmployee(this.user).subscribe(response => {
      console.log(response);
      this.ngOnInit();  // Refresh the list
    });
  }

  onDeleteEmployee(id: number) {
    this.adminService.deleteEmployee(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();  // Refresh the list
    });
  }

  onApproveUpdate(user: User) {
    this.adminService.approveUpdate(user).subscribe(response => {
      console.log(response);
      this.ngOnInit();  // Refresh the list
    });
  }

}
