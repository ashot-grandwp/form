import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {  CustomValidators } from 'src/validators/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form!: FormGroup

  get firstName() {
    return this.form.get('firstName')
  };

  get lastName(){
    return this.form.get('lastName')
  }

  get number(){
    return this.form.get('number')
  }

  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  get newForm() {
    return this.form.get('newForm') as FormArray;
  }

  ngOnInit(){
    this.form = new FormGroup({
      firstName: new FormControl('',[
        Validators.required
      ]),
      lastName: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email, Validators.required
      ]),
      number: new FormControl('',[
        Validators.required, Validators.pattern("^([1-9]|10)$") 
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        CustomValidators.passwordUppercaseValidator(/[A-Z]/)
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        // CustomValidators.passwordMatchValidator()
      ]),
      newForm: new FormArray([])
      
    } , {validators: CustomValidators.passwordMatchValidator});

  }

  onSubmit(){

    let formCount = this.newForm.value.length;

    if(formCount > 10) console.log("ERROR: Maximum form added is 10")

    console.log("for test", this.form.value)
    
  }

  addForm(){
    const control = new FormControl('');
    this.newForm.push(control);
  }

  removeForm(){
    this.newForm.removeAt(this.newForm.length-1)
  }
}
