import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    CalendarModule,
    CascadeSelectModule,
    CommonModule,
    InputSwitchModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form3';
  formGroup: FormGroup;
  showThankYou = false;

  minDate: Date;
  maxDate: Date;
  countries: any[];

  heightestQualifications = [
    { name: 'Master Degree', value: 'master' },
    { name: 'Bachelor Degree', value: 'bachelor' },
    { name: '12th Grade', value: '12grade' },
    { name: '10th Grade', value: '10grade' },
    { name: 'Other', value: 'other' }
  ];

  genders = [
    { key: 'male', name: 'Male' },
    { key: 'female', name: 'Female' },
    { key: 'other', name: 'Other' }
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      date: [null, Validators.required],
      selectedCity: [null, Validators.required],
      checked: [false],
      selectedheightestQualification: [null, Validators.required],
      gender: [null, Validators.required],
      city: [false]
    });

    this.countries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' }
            ]
          },
          {
            name: 'Victoria',
            cities: [
              { cname: 'Melbourne', code: 'A-ME' },
              { cname: 'Geelong', code: 'A-GE' }
            ]
          }
        ]
      },
      {
        name: 'USA',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles', code: 'US-LA' },
              { cname: 'San Diego', code: 'US-SD' }
            ]
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Houston', code: 'US-HO' },
              { cname: 'Dallas', code: 'US-DA' }
            ]
          }
        ]
      }
    ];

    const today = new Date();
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted:', this.formGroup.value);
      this.showThankYou = true;
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  closeThankYou() {
    this.showThankYou = false;
  }
}
s
