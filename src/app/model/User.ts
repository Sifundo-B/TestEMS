import { Validators, ValidatorFn } from '@angular/forms';
import { Department } from './Department';
import { Position } from './Position';

export class User {
    id!: number;
    firstName!: string;
    lastName!: string;
    dateOfBirth!: Date;
    idNumber!: string;
    startDate!: Date;
    address!: string;
    phoneNumber!: string;
    image!: string;
    gender!: string;
    password!: string;
    email!: string;
    emergencyContactName!: string;
    emergencyContactRelationship!: string;
    emergencyContactNo!: string;
    department!: Department;
    position!: Position;
    softDeleted!: boolean;
    updateRequestPending!: boolean;

    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.dateOfBirth = new Date();
        this.idNumber = '';
        this.startDate = new Date();
        this.address = '';
        this.phoneNumber = '';
        this.image = '';
        this.gender = '';
        this.password = '';
        this.email = '';
        this.emergencyContactName = '';
        this.emergencyContactRelationship = '';
        this.emergencyContactNo = '';
        this.department = new Department();
        this.position = new Position();
        this.softDeleted = false;
        this.updateRequestPending = false;
    }

    static validators = {
        firstName: [Validators.required],
        lastName: [Validators.required],
        dateOfBirth: [Validators.required],
        idNumber: [Validators.required, Validators.minLength(13), Validators.maxLength(13)],
        startDate: [Validators.required],
        address: [Validators.required],
        phoneNumber: [Validators.required],
        image: [Validators.required],
        gender: [Validators.required],
        password: [Validators.required],
        email: [Validators.required, Validators.email],
        emergencyContactName: [Validators.required],
        emergencyContactRelationship: [Validators.required],
        emergencyContactNo: [Validators.required],
        department: [Validators.required],
        position: [Validators.required]
    };
}
