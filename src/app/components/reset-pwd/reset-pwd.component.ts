import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/shared/services/auth-services.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {
  email =new FormControl('', [Validators.required, Validators.email]);

  constructor(public authService : AuthServicesService) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid Enty' : '';
  }
}
