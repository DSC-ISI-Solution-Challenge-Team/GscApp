import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {AuthServicesService} from '../../shared/services/auth-services.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true ; 
  email =new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)])  ;
  
  constructor(public authService : AuthServicesService) {

   }

   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid Enty' : '';
  }

  ngOnInit(): void {
  }

}
