import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserNamPassword } from 'src/app/services/auth.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    //icons
    faLock = faLock;
    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private authService: AuthService, private router: Router, private formbuilder: FormBuilder) { }

    createForm() {
        this.loginForm = this.formbuilder.group({
            email: '',
            password: ''
        })
    };

    get email() {
        return this.loginForm.get('email');
    };

    get password() {
        return this.loginForm.get('password');
    };
    async login() {
        //loader
        let userNamePass: UserNamPassword;
        if (!this.loginForm.valid) {
            alert('fill up ...')
        }
        userNamePass = {
            email: this.email?.value ?? '',
            password: this.password?.value ?? ''
        }
        const user = await this.authService.login(userNamePass);
        // await loading.dismiss();

        if (user) {
            this.router.navigateByUrl('/admin', { replaceUrl: true });
        } else {
            alert('login failed, please try again!');
        }
    }
}