import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nest-js-boiler-plate-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent implements OnInit {

  public applicationForm: FormGroup;

  constructor(private FB: FormBuilder) { }

  ngOnInit() {
    
  }


  public saveForm() {

  }

}
