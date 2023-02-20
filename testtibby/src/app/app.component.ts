import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTibby';

  constructor (public dialog: MatDialog) {
  }
    
    openDialog() {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '250px',
        data: {title: 'Contactez-moi'}
      }); 
    }
}
