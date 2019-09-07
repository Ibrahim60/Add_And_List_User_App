import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
  userList : any;

  constructor(private service:UserService,
    private route:Router) { }

  // FirstName = 'Ibrahim';
  // LastName = 'Khan';
  // Address = 'Dalazak Road';

  ngOnInit() {
    this.userList = this.service.getList();
    // console.log(this.userList);
  }

  delete(id: number) {
    this.service.delete(id);
  }
  edit(item){
    this.route.navigate(['adduser',item.id]);
  }

  // firstName(e) {
  //   this.FirstName = e.target.value;
  //   console.log(e);
  // }

  // lastName(r) {
  //   this.LastName = r.target.value;
  //   console.log(r);
  // }

  // address(p) {
  //   this.Address = p.target.value;
  //   console.log(p);
  // }



}
