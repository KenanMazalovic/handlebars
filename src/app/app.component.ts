import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mockData = [
    {
      name: 'content',
      field_type: 'textarea',
    },
    {
      name: 'sponsorLogoUrl',
      field_type: 'input',
    },

    {
      name: 'headerText',
      field_type: 'input',
    }
  ];

  mockDataHTML = `<div>
  <img src= {{sponsorLogoUrl}} />
  <h1 style="color:green">{{ headerText }}</h1>
  <p>{{ content }}</p>
  </div>`;

}
