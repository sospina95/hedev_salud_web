import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
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
