import { Component } from '@angular/core';
import { AuthServicesService } from './shared/services/auth-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Donatit';
 
  constructor(public authService : AuthServicesService){
  }
  
}
