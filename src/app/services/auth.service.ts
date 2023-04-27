import { Injectable } from '@angular/core';
import {
    Auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

export interface UserNamPassword {
    email: string;
    password: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private auth: Auth, private router: Router) { }

    async register(userNamePass: UserNamPassword) {
        try {
            const user = await createUserWithEmailAndPassword(this.auth, userNamePass.email, userNamePass.password);
            return user;
        } catch (e) {
            return null;
        }
    }

    async login(userNamePass: UserNamPassword) {
        try {
            const user = await signInWithEmailAndPassword(this.auth, userNamePass.email, userNamePass.password);
            return user;
        } catch (e) {
            return null;
        }
    }

    logout() {
        return signOut(this.auth),
        this.router.navigate(['login'])
    }

    // isLoggedIn(){
    //     return user(this.auth) !== null;
    // }

    // get authenticated():boolean{
    //     return this.auth !== null;
    // }

}