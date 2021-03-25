import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css']
})
export class DonateFormComponent implements OnInit {

  fullname =new FormControl('', [Validators.required, Validators.maxLength(30)]);
  Offer = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  qte =new FormControl('', [Validators.required, Validators.maxLength(30)]);
  note =new FormControl('', [Validators.required, Validators.maxLength(30)]);
  phone =new FormControl('', [Validators.required, Validators.maxLength(8)]);


  constructor() { }

  ngOnInit(): void {
  }

}
