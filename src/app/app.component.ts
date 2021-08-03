import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/validators/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form!: FormGroup

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
        CustomValidators.passwordValidator(/[A-Z]/)
      ]),
    })



  }

  onSubmit(){
    console.log("for test", this.form.value)
  }
}
