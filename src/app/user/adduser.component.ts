import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  userForm: FormGroup;
  userid : number;
  constructor(private fb: FormBuilder,
    private service: UserService,
    private route:Router,
    private navUrl :ActivatedRoute) { }

  ngOnInit() {
    // this.userForm = new FormGroup({       ////formgrop
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experience: new FormControl()
    //   })
    // });
    this.userForm =this.fb.group({  //// form builder
      firstName:[],
      lastName:[],
      // skills:this.fb.group({
      //   skillName:[],
      //   experience:[]
      // })
    })

    this.userForm = this.fb.group({
      id: [new Date().getTime()],
      firstName: [],
      lastName: [],
    });
}


  onSubmit() {
    this.service.add(this.userForm.value);
    this.route.navigate(['userList']);
    // console.log(this.userForm.value);
  }

  // onload() {
  //   this.userForm.get('firstName').setValue('Ibrahim');
  //   this.userForm.get('lastName').setValue('Khan');
  //   this.userForm.get('skillName').setValue('Frond-End');
  //   this.userForm.get('experience').setValue('4 Years');
  

  //   this.userForm.patchValue({
  //     firstName: 'Ibrahim',
  //     lastName: 'Khan',
  //     skills:{
  //       skillName: 'Frond-End',
  //       experience: '8 Years'
  //     }
  //   })
  // }

  // ngOnDestroy(): void {
  //   alert('you are leaving');
  // }



}
