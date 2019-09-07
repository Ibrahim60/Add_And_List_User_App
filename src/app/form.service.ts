import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  data = [];
  constructor() { 
    this.getlist();
  }

  store(value){
    console.log(this.data)
    this.data.push(value);
    localStorage.setItem('data',JSON.stringify(this.data));
  }

  getlist(){
    if(localStorage.getItem('data')===null){
      this.data=[];
      return this.data;
    }else{
      this.data=JSON.parse(localStorage.getitem('data'))
      return this.data;

    }
  }

}


