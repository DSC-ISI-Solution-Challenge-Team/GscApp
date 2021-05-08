import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { CommunityComponent } from './components/community/community.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from '../app/shared/modules/material/material.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AuthServicesService} from './shared/services/auth-services.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ResetPwdComponent } from './components/reset-pwd/reset-pwd.component';
import { DonateFormComponent } from './components/donate-form/donate-form.component';
import { LocationComponent } from './components/location/location.component';
import { MainComponent } from './components/main/main.component' ; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    
    PostComponent,
    CommunityComponent,
    NavigationComponent,
    SignInComponent,
    SignUpComponent,
    ResetPwdComponent,
    DonateFormComponent,
    LocationComponent,
    MainComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyD0kIxMQrDaj14oV3ARjzsQKXY0q9HIhQU",
        authDomain: "scapp-e52d2.firebaseapp.com",
        databaseURL: "https://scapp-e52d2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "scapp-e52d2",
        storageBucket: "scapp-e52d2.appspot.com",
        messagingSenderId: "897307968571",
        appId: "1:897307968571:web:1b0364ba64ef08e99d481e",
        measurementId: "G-EB0L5FTXNE"
      }),

     
    
  ],
  providers: [AuthServicesService],
  bootstrap: [AppComponent,MaterialModule]
})
export class AppModule { }
