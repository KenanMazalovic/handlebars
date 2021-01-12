import {Pipe} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe {
  constructor(private sanitizer: DomSanitizer){}

  // tslint:disable-next-line:typedef
  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
