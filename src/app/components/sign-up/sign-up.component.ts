import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/shared/services/auth-services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  hide = true;

    email =new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(6)])  ;
    name =new FormControl('', [Validators.required, Validators.maxLength(30)]);
    nature =new FormControl('', [Validators.required]);

    constructor(
      public  authService : AuthServicesService
       ) { }
      ngOnInit(): void {
     }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid Enty' : '';
  }
  
 

  

 
  


  
}



