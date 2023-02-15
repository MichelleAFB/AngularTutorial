import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <h2>
      contact 
    </h2>
    <a routerLink="add">Add Contact</a>
    <br>
    <a routerLink="edit/300">Edit Contact</a>
    <div>
    <router-outlet></router-outlet>
    </div>
  `,
 
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
