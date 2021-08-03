import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators{
    public static passwordValidator(nameRe: RegExp): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const hasUpper = nameRe.test(control.value);
            return hasUpper ? null : {hasUpperLetter: {value: control.value}}

            // if (!hasUpper) {
            //     return { passwordValidator: true };
            // }
            // return null;

        }
    }

}

