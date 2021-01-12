import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as Handlebars from 'handlebars';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-html-handlebars',
  templateUrl: './html-handlebars.component.html',
  styleUrls: ['./html-handlebars.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HtmlHandlebarsComponent implements OnInit{

  constructor(private sanitizer: DomSanitizer) {}

   result: any;
  @Input()source: any;
  @Input() set data(value: any) {
    // console.log(value);
    this.initializeHandlebars();

}
  testData =
    {
      content: 'content',
      sponsorLogoUrl: 'sponsorLogoUrl',
      headerText: 'headerText',
    };


  ngOnInit(): void {
  }

  initializeHandlebars(): void {

    // console.log(this.source);
    const template = Handlebars.compile(this.source);
    this.result = template(this.testData);
    console.log(this.result);
    // this.result = this.sanitizer.bypassSecurityTrustHtml(this.source);


  }

}
