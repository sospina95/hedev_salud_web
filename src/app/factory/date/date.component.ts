import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() attribute;
  @Input() name;
  @Input() label;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.name].valid; }

  constructor() { }

  ngOnInit() {
    // console.log("Data",this.attribute);
    // console.log("name",this.name);
    // console.log("label",this.label);
  }

}
