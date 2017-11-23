import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent {
  passwordForm: FormGroup;
  confirmError = false;

  constructor(private fb: FormBuilder) { }

  get f_oldPassword() {
    return this.passwordForm.get('oldPassword');
  }
  get f_confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }
  get f_newPassword() {
    return this.passwordForm.get('newPassword');
  }

  ValidateOldPassword(control: AbstractControl): Promise<Validators> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== 'joseph') {
          resolve({ validPassword: true });
        }
        else {
          resolve(null);
        }
      }, 2000)
    })
  }

  ValidateNewPassword(control: AbstractControl): Validators {
    let patt = new RegExp('(?=.*[!@#\$%\^&\*])');

    if (!patt.test(control.value) || (control.value).length < 8 ) {
      return { validNewPassword: true };
    }
    else {
      return null
    }
  }

  submitForm(form: FormGroup) {
    if (form.value['newPassword'] !== form.value['confirmPassword']) {
      form.controls['confirmPassword'].setErrors({ validConfirmPassword: true });
    }
  }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      oldPassword: ['',
        Validators.compose([
          Validators.required.bind(this)]),
        Validators.composeAsync([this.ValidateOldPassword.bind(this)])],
      newPassword: ['',
        Validators.compose([
          Validators.required.bind(this),
          this.ValidateNewPassword.bind(this)
        ])],
      confirmPassword: ['',
        Validators.compose([Validators.required.bind(this)])]
    });
  }

}
