import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as Handlebars from 'handlebars';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-html-handlebars',
  templateUrl: './html-handlebars.component.html',
  styleUrls: ['./html-handlebars.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HtmlHandlebarsComponent {

  constructor() {}

   result: any;
  @Input() source: any;
  @Input() set data(value: any) {
    // console.log(value);
    this.compileHandlebars(value);

}

  compileHandlebars(data: any): void {
    // const template = Handlebars.compile(this.sanitizedHTML);
    const template = Handlebars.compile(this.source);
    this.result = template(data);
  }

}
