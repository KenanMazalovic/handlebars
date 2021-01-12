import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlHandlebarsComponent } from './html-handlebars.component';

describe('HtmlHandlebarsComponent', () => {
  let component: HtmlHandlebarsComponent;
  let fixture: ComponentFixture<HtmlHandlebarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlHandlebarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlHandlebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
