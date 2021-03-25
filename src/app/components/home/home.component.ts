import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  color:ThemePalette ='warn' ; 
  mode: ProgressSpinnerMode = 'indeterminate';
 
  constructor() { }

  ngOnInit(): void {
  }

}
