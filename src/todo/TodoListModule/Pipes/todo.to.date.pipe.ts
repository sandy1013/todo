import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toDate'
})
export class ToDatePipe implements PipeTransform {
    transform(input_value: string): Date | null {
        if (input_value && typeof input_value === 'string') {
            return new Date(input_value);
        } else {
            return null;
        }

    }
}
