import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  form: FormGroup; //type
  data= []; //assign
  constructor(private fb: FormBuilder,
    private _service: FormService,
    private route: Router) { }

  ngOnInit() {
    this.data =this._service.getlist();
    console.log(this.data);
    console.log('getlist');
    this.form =this.fb.group({
      firstname : [],
      dob : []
    });
    
  }

  save() {
    this._service.store(this.form.value);
    this.route.navigate(['formlist']);
  }

}
