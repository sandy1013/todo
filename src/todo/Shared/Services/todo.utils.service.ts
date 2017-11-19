import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
    validate(errors: FormErrors, form: FormGroup) {
        errors.valid = true;
        errors.message = null;
        // tslint:disable-next-line:forin
        for (const control in errors.controls) {
            // tslint:disable-next-line:forin
            for (const err in errors.controls[control]) {
                try {
                    if (form.controls[control].errors[err]) {
                        errors.valid = false;
                    }
                    errors.controls[control][err] = form.controls[control].errors[err];
                } catch (e) { errors.controls[control][err] = false; }
            }
        }
        return errors.valid;
    }
}

// custom model for form errors
export interface FormErrors {
    valid: boolean;
    message: string | null;
    controls: {
        [s: string]: {
            [s: string]: any
        }
    };
}
