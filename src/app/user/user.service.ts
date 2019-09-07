import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList = [
    { id: 1, firstName: 'Usman', lastName: 'saleh' },
    { id: 2, firstName: 'Ibraheem', lastName: 'khan' },
    { id: 3, firstName: 'Moeez', lastName: 'khan' },
    { id: 4, firstName: 'Toseef', lastName: 'khan' }];

  constructor(private route:Router) { }
  getList() {
    return this.userList;
  }

  add(value) {
    // console.log(value)
    this.userList.push(value);
    // this.route.navigate(['userList']);
  }

  delete(id) {
    const findIndex = this.userList.findIndex((item) => item.id === id);
    this.userList.splice(findIndex, 1);
  }

}
