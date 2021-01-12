import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as Handlebars from 'handlebars';

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
    this.compileHandlebars(value);

}

  compileHandlebars(data: any): void {
    const template = Handlebars.compile(this.source);
    this.result = template(data);
  }

}
