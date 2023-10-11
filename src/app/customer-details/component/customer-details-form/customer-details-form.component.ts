import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface IUser {
  name: string;
  age: number;
  email: string;
  accountNo: number;
  cardType: string;
}

@Component({
  selector: 'app-customer-details-form',
  templateUrl: './customer-details-form.component.html',
  styleUrls: ['./customer-details-form.component.scss']
})
export class CustomerDetailsFormComponent implements OnInit {
  customerDetailsForm!: FormGroup;
  user: IUser;
  userData: IUser[] = [];
  showBanner = false;
  cards = ["Platinum Card", "Silver Card", "Gold Card", "Master Card"]

  constructor(private router : Router) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.customerDetailsForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      age: new FormControl(this.user.age, [
        Validators.required,
        Validators.maxLength(2),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]),
      accountNo: new FormControl(this.user.accountNo, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),
      ]),
      cardType: new FormControl(this.user.cardType, [
        Validators.required
      ]),
    });
  }

  get name() {
    return this.customerDetailsForm.get('name')!;
  }

  get age() {
    return this.customerDetailsForm.get('age')!;
  }

  get email() {
    return this.customerDetailsForm.get('email')!;
  }

  get accountNo() {
    return this.customerDetailsForm.get('accountNo')!;
  }

  get cardType() {
    return this.customerDetailsForm.get('cardType')!;
  }

  public validate(): void {
    this.showBanner = false;
    if (this.customerDetailsForm.invalid) {
      for (const control of Object.keys(this.customerDetailsForm.controls)) {
        this.customerDetailsForm.controls[control].markAsTouched();
      }
      return;
    }
    this.user = this.customerDetailsForm.value;
    console.log("userrrr", this.user)
    const data = localStorage.getItem("userDetails") || null;
    console.log("daaaaa", data);
    if (data) {
      this.userData = JSON.parse(data);
      console.log("userData", this.userData)
      this.userData.forEach(element => {
        if (element.accountNo === this.customerDetailsForm.get("accountNo")!.value && element.cardType === this.customerDetailsForm.get("cardType")!.value) {
          console.log("hiiii")
          this.showBanner = true;
          return;
        }
      });
    } else {
      this.userData = [];
    }
    this.userData.push(this.user);
    localStorage.setItem("userDetails", JSON.stringify(this.userData));
    if (!this.showBanner) {
      this.router.navigateByUrl("card-status");
    }
  }

  changeType(event: any): void {
    console.log("eventtt", event)
    let idx = event.target.value;
    console.log('id:', idx);
    this.customerDetailsForm.controls['cardType'].clearValidators();

    if (idx == 0) {
      this.customerDetailsForm.controls['cardType'].setValidators([
        Validators.required,
      ]);
    }
  }

}
