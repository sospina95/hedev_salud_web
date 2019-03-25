import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() attribute;
  @Input() name;
  @Input() label;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.name].valid; }
  constructor() { }

  ngOnInit() {
    // console.log("Data Select",this.attribute);
    // console.log("name Select",this.name);
    // console.log("label Select",this.label);
  }

}
