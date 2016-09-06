import { Component }    from '@angular/core';
import { Registration } from './registration';

@Component({
    selector: 'registration-form',
    templateUrl: 'app/registration-form.component.html'
})

export class RegistrationFormComponent {
    //model = new Registration(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
