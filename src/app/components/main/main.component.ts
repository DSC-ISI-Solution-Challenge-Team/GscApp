import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/shared/services/auth-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = this.authService.userData ;
  constructor(public authService : AuthServicesService) { }

  ngOnInit(): void {
   
  }

  show(){
    console.log(this.user)
  }
}
