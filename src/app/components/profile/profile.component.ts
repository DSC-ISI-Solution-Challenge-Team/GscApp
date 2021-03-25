import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/shared/services/auth-services.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = this.authService.userData ;
  constructor(public authService : AuthServicesService) { }

  ngOnInit(): void {
  }
  

}
