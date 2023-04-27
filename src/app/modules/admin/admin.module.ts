import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { MatIconModule } from '@angular/material/icon';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    AccordionModule,
    GoogleMapsModule
    
    
  ]
})
export class AdminModule { }
