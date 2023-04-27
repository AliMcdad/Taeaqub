import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, getApp, provideFirebaseApp, FirebaseApp, FirebaseAppModule, FirebaseApps } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';


import { SignupComponent } from './components/signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        ForgotPasswordComponent,
        NotFoundComponent,
    ],
    imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()), 
        provideFirestore(() => getFirestore()),
        provideMessaging(() => getMessaging()),
        provideStorage(() => getStorage()),
        BrowserModule,
        MatIconModule,
        AppRoutingModule,


        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,


        FontAwesomeModule,
        

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
