import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HtmlHandlebarsComponent } from './html-handlebars/html-handlebars.component';
import {SafeHtmlPipe} from './pipes/safeHtml.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    HtmlHandlebarsComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DynamicFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
