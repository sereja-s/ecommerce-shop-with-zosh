import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

	@Input() changeTemplate: any;

	constructor(private formBuilder: FormBuilder, private store: Store) { }
	
	loginForm: FormGroup = this.formBuilder.group({
		firstName: ['', [Validators.required]],
		lastName: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(8)]],
	});

	submitForm(): void {
		if (this.loginForm.valid) {
			console.log("login req data", this.loginForm.value)
		}
	}

}