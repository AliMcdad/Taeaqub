import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/admin']);

const routes: Routes = [
    {
        path: '',//=> its for blank routing but path:'**' => its for wrong routing
        redirectTo: '/login',
        pathMatch: 'full',
    },

    {
        path: 'login',
        component: LoginComponent,
        ...canActivate(redirectLoggedInToHome)
    },

    {
        path: 'signup',
        component: SignupComponent
    },

    {
        path: 'fp',
        component: ForgotPasswordComponent
    },

    {
        path: 'nf',
        component: NotFoundComponent
    },


    //lazy load for children
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
        ...canActivate(redirectUnauthorizedToLogin),
    },

    // error not found
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}