import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[agevalidation]',
    // We add our directive to the list of existing validators
    providers: [
      { provide: NG_VALIDATORS, useExisting: agevalidator, multi: true }
    ]
 })

export class agevalidator implements Validator {

    validate(c: FormControl): { [key: string]: any } {

        if (18 < c.value || c.value>60) {
            // console.log(c.value + " is not a number");
            return {
                isNumber:
                {
                    valid: false
                }
            };
        }

        // console.log(c.value + " is a number");
        return null;
    }
}