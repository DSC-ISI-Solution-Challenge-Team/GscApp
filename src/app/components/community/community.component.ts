import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

}
