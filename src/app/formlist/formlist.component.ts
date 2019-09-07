import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.scss']
})
export class FormlistComponent implements OnInit {

  formList : any;
  constructor(private _service:FormService) { }

  ngOnInit() {
    this.formList = this._service.getlist();
    console.log(this.formList);
  }

}
