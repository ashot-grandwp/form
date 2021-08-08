import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {  CustomValidators } from 'src/validators/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormArray

  get formArray() {
    return this.form.controls as FormGroup[];
  }

  firstName(item: FormGroup) {
    return item.get('firstName') as FormControl
  };

  lastName(item: FormGroup){
    return item.get('lastName') as FormControl
  }

  number(item: FormGroup){
    return item.get('number') as FormControl
  }

  email(item: FormGroup){
    return item.get('email') as FormControl
  }

  password(item: FormGroup){
    return item.get('password') as FormControl
  }

  confirmPassword(item: FormGroup){
    return item.get('confirmPassword') as FormControl
  }

  constructor(private fb: FormBuilder) {
    this.form = fb.array([this.formFieldGroup()]);
  }

  formFieldGroup(){
    return this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      number: ['',[Validators.required, Validators.pattern("^([1-9]|10)$")]],
      password: [null, [Validators.required, Validators.minLength(6), CustomValidators.passwordUppercaseValidator(/[A-Z]/)]],
      confirmPassword: [null, [Validators.required]],
    }, {validator: CustomValidators.passwordMatchValidator})
  }

  ngOnInit(){
    // this.formArray = new FormArray([this.form]);
    // this.form = new FormGroup({
    //   firstName: new FormControl('',[
    //     Validators.required
    //   ]),
    //   lastName: new FormControl('',[
    //     Validators.required
    //   ]),
    //   email: new FormControl('', [
    //     Validators.email, Validators.required
    //   ]),
    //   number: new FormControl('',[
    //     Validators.required, Validators.pattern("^([1-9]|10)$")
    //   ]),
    //   password: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(6),
    //     CustomValidators.passwordUppercaseValidator(/[A-Z]/)
    //   ]),
    //   confirmPassword: new FormControl(null, [
    //     Validators.required,
    //     // CustomValidators.passwordMatchValidator()
    //   ]),
    //   newForm: new FormArray([])
    //
    // } , {validators: CustomValidators.passwordMatchValidator});
  }

  onSubmit(){

    let formCount = this.form.value.length;
    if(formCount > 10) alert("ERROR: You can add maximum 10 forms!")

    alert(JSON.stringify(this.form.value, null, 2))
    console.log(this.form.value)
  }

  addForm(){
    this.form.push(this.formFieldGroup());
  }

  removeForm(i: any){
    this.form.removeAt(i)
  }
}
