import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
	
	@Input() changeTemplate: any;

	constructor(private formBuilder: FormBuilder, private store: Store) { }
	
	loginForm: FormGroup = this.formBuilder.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(8)]],
	});

	submitForm(): void {
		if (this.loginForm.valid) {
			console.log("login req data", this.loginForm.value)
		}
	}

}
