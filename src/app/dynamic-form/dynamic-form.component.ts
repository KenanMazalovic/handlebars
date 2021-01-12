import { Component, OnInit, Input } from '@angular/core';
    import { FormControl, FormGroup, Validators } from '@angular/forms'
    @Component({
      selector: 'app-dynamic-form',
      templateUrl: './dynamic-form.component.html',
      styleUrls: ['./dynamic-form.component.css']
    })
    export class DynamicFormComponent implements OnInit {
      constructor() { }
      @Input()formConfig = [];
      @Input()source: any;
      form: FormGroup;
      userGroup: any = {};

      ngOnInit(): void{
        for (const config of this.formConfig){
          this.userGroup[config.name] = new FormControl('', Validators.required);
        }
        this.form = new FormGroup(this.userGroup);
      }
    }
