import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input() attribute;
  @Input() name;
  @Input() label;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.name].valid; }

  constructor() { }

  ngOnInit() {}
}
