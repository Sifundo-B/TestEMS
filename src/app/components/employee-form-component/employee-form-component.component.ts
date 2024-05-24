import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/model/Department';
import { Position } from 'src/app/model/Position';
import { User } from 'src/app/model/User';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-employee-form-component',
  templateUrl: './employee-form-component.component.html',
  styleUrls: ['./employee-form-component.component.scss']
})
export class EmployeeFormComponentComponent implements OnInit {
  employeeForm!: FormGroup;
  departments: Department[] = [];
  positions: Position[] = [];
  user: User = new User();

  constructor(private fb: FormBuilder, private userService: UserServiceService,
    private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.loadPositions();
    this.initializeForm();
  }

  initializeForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, this.futureDateValidator]],
      idNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      startDate: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      image: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emergencyContactName: ['', Validators.required],
      emergencyContactRelationship: ['', Validators.required],
      emergencyContactNo: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formValues = this.employeeForm.value;
      this.user = { ...formValues };  // Update user object with form values
      this.adminService.addEmployee(this.user).subscribe(
        response => {
          console.log(response);
          this.ngOnInit();  // Refresh the form
        },
        error => {
          console.error('Error adding employee:', error);
        }
      );
    }
  }

  loadDepartments() {
    this.userService.getDepartments().subscribe(
      (data: Department[]) => {
        this.departments = data;
      },
      (error) => {
        console.log('Error fetching departments:', error);
      }
    );
  }

  loadPositions() {
    this.userService.getPositions().subscribe(
      (data: Position[]) => {
        this.positions = data;
      },
      (error) => {
        console.log('Error fetching positions:', error);
      }
    );
  }

  futureDateValidator(control: any) {
    const today = new Date().toISOString().split('T')[0];
    return control.value >= today ? null : { futureDate: true };
  }
}
