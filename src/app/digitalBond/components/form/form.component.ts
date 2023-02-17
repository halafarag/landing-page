import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employess } from '../../models/employess';
import { EmployeesService } from '../../services/employees.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  empList: Employess[] = [];
  resumeFile: any;
  constructor(
    private empService: EmployeesService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  profileForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(10)]],
    position: ['', [Validators.required]],
    avalibiltyDate: ['', [Validators.required]],
    salary: ['', [Validators.required, Validators.min(100)]],
    dateOfBirth: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phoneNumber: [
      '',
      [Validators.required, Validators.pattern('^((\\+20-?)|0)?[0-9]{10}$')],
    ],
    email: ['', [Validators.required, Validators.email]],
    maritalStatus: ['', [Validators.required]],
    resume: [''],
  });
  positonList: string[] = [
    'FrontEnd',
    'BackEnd',
    'GraficDesigner',
    'Accounting',
    'Research',
    'Sales',
    'Embeded',
  ];
  get fullName() {
    return this.profileForm.get('fullName');
  }
  get position() {
    return this.profileForm.get('position');
  }
  get avalibiltyDate() {
    return this.profileForm.get('avalibiltyDate');
  }
  get salary() {
    return this.profileForm.get('salary');
  }
  get dateOfBirth() {
    return this.profileForm.get('dateOfBirth');
  }
  get address() {
    return this.profileForm.get('address');
  }
  get phoneNumber() {
    return this.profileForm.get('phoneNumber');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get maritalStatus() {
    return this.profileForm.get('maritalStatus');
  }

  // addEmployee() {
  //   console.warn(this.profileForm.value);
  //   const {
  //     name,
  //     position,
  //     avalibiltyDate,
  //     salary,
  //     dateOfBirth,
  //     address,
  //     phoneNumber,
  //     email,
  //     maritalStatus,
  //     resume,
  //   } = this.profileForm.value;
  //   const newEmployee = {
  //     name: name,
  //     position: position,
  //     avalibiltyDate: avalibiltyDate,
  //     salary: salary,
  //     dateOfBirth: dateOfBirth,
  //     address: address,
  //     phoneNumber: phoneNumber,
  //     email: email,
  //     maritalStatus: maritalStatus,
  //     resume: resume,
  //   };

  //   var formData: any = new FormData();

  //   formData.append('name', newEmployee.name);
  //   formData.append('position', newEmployee.position);
  //   formData.append('avalibiltyDate', newEmployee.avalibiltyDate);
  //   formData.append('salary', newEmployee.salary);
  //   formData.append('address', newEmployee.address);
  //   formData.append('dateOfBirth', newEmployee.dateOfBirth);
  //   formData.append('phoneNumber', newEmployee.phoneNumber);
  //   formData.append('email', newEmployee.email);
  //   formData.append('maritalStatus', newEmployee.maritalStatus);
  //   formData.append('resume', this.resumeFile);
  //   console.log(formData);
  //   console.log(newEmployee.name);

  //   this.empService.addEmployee(formData).subscribe({
  //     next: (employee) => {
  //       console.log(formData);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: 'Product added sucsessfully ',
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     },
  //   });
  // }
  onselect(event: any) {
    this.resumeFile = event.target.files[0];

    console.log(this.resumeFile);
  }
  addEmployee() {
    const {
      fullName,
      position,
      avalibiltyDate,
      salary,
      dateOfBirth,
      address,
      phoneNumber,
      email,
      maritalStatus,
      resume,
    } = this.profileForm.value;
    const newEmployee = {
      name: fullName,
      position: position,
      avalibiltyDate: avalibiltyDate,
      salary: salary,
      dateOfBirth: dateOfBirth,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      maritalStatus: maritalStatus,
      resume: resume,
    };
    this.empService.addEmployee(newEmployee).subscribe({
      next: (employee) => {
        console.log();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Information added sucsessfully ',
          showConfirmButton: false,
          timer: 500,
        });
      },
    });
    this.router.navigate([`/welcom/${newEmployee.name}`]);
  }

  getEmp() {
    this.empService.getEmp().subscribe((data) => {
      this.empList = data;
      console.log(data);
    });
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  ngOnInit(): void {
    this.getEmp();
  }
}
