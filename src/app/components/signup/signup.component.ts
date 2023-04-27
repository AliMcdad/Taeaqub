import { Component, OnInit } from '@angular/core';

import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, UserNamPassword } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    
    constructor(private formbuilder: FormBuilder, private authService: AuthService, private router: Router) { }

    //code the form group
    //code the form builder

    signupForm = new FormGroup({
        username: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });

    FAfacebook = faFacebookSquare;
    FAtwitter = faTwitterSquare;
    FAgoogle = faGoogle;

    createForm() {
        this.signupForm = this.formbuilder.group({
            username: '',
            email: '',
            password: ''
        })
    };

    get email() {
        return this.signupForm.get('email');
    };

    get password() {
        return this.signupForm.get('password');
    };
    //icons


    async register() {
        //loader
        let userNamePass: UserNamPassword;
        if (!this.signupForm.valid) {
            alert('fill up ...')
        }
        userNamePass = {
            email: this.email?.value ?? '',
            password: this.password?.value ?? ''
        }
        const user = await this.authService.register(userNamePass);
        // await loading.dismiss();

        if (user) {
            this.router.navigateByUrl('/admin', { replaceUrl: true });
        } else {
            alert('Registration failed, ' + 'please try again!');
        }
    }
}
