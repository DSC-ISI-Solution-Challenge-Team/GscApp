import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationService } from 'src/app/shared/services/location.service';
import { DonateFormComponent } from '../donate-form/donate-form.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(public dialog: MatDialog,
    public location : LocationService) {
  }
  
  ngOnInit(): void {
  }
  

  openDialog() {
    const dialogRef = this.dialog.open(DonateFormComponent,{
      panelClass: 'modalbox'
     }
  );
   // panelClass: 'custom-modalbox'
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}




