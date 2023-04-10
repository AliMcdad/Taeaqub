import { Component } from '@angular/core';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { Firestore } from '@angular/fire/firestore'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    name ="";
    email = "";
    password = "";
    message = "";
    AuthenticationService ="";
    constructor( private store: Firestore){}

    submitForm(){
        const message = `My name is ${this.name}` ;
        alert(message);
    }

    FAfacebook = faFacebookSquare;
    FAtwitter = faTwitterSquare;
    FAgoogle = faGoogle;
}
