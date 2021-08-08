import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators{
    public static passwordUppercaseValidator(nameRe: RegExp): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const hasUpper = nameRe.test(control.value);
            return hasUpper ? null : {hasUpperLetter: {value: control.value}}
        }
    }

    static passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const pass = control.get('password');
        const confirmPass = control.get('confirmPassword');

        return pass && confirmPass && pass.value === confirmPass.value ? null : { notSame: true };

    }

}
