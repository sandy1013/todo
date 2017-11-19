import { Directive, OnInit, Renderer2, ElementRef} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive ({
    selector: '[todoPasswordStrength]'
})
export class PasswordStrengthDirective implements OnInit {
    eleField: NgControl;
    strongRegex: any = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    mediumRegex: any = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');

    constructor(private render: Renderer2, private eleRef: ElementRef, private control: NgControl) { }

    ngOnInit() {
        this.control.valueChanges.subscribe(() => {
            this.validate();
        });
    }

    validate() {
        if (this.control.invalid) {
            this.render.removeClass(this.eleRef.nativeElement, 'pass-strong');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-weak');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-very-weak');
        } else if (this.control.valid && this.strongRegex.test(this.control.value)) {
            this.render.addClass(this.eleRef.nativeElement, 'pass-strong');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-weak');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-very-weak');
        } else if (this.control.valid && this.mediumRegex.test(this.control.value)) {
            this.render.addClass(this.eleRef.nativeElement, 'pass-weak');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-strong');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-very-weak');
        } else {
            this.render.addClass(this.eleRef.nativeElement, 'pass-very-weak');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-strong');
            this.render.removeClass(this.eleRef.nativeElement, 'pass-weak');
        }
    }
}
