import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
username='';
usermark='';

user=[
{ id:1,name:'bao', mark:'5',},
{ id:2,name:'thien', mark:'6',},
{ id:3,name:'huy', mark:'9',},
]
  

  constructor() { }

  ngOnInit(): void {
  }
  // Submit //
  // submit()
  // {
  //     this.user.push(
  //       { 
  //         id: this.user.length + 1,
  //         name: this.username,
  //         mark: this.usermark,
  //       }
  //     );
  //     this.username='';
  //     this.usermark='';
  // }

  // RESET // 
  value='';
  reset(){
    this.username=this.value;
    this.usermark=this.value;
    
  }
  delete(id:number){
    const deletes=  this.user.findIndex(userid => userid.id===id);
    this.user.splice(deletes,1);
  }
 

  submits(){
   const i= this.user.filter(e => e.name === this.username)
   console.log(i)
    if(i.length === 0){
      this.user.push({ 
        id: this.user.length + 1,
        name: this.username,
        mark: this.usermark, });
      this.username='';
      this.usermark='';
    }
    else{ 
      alert('trung')
    }
  
  }
    
  
  edit(id:number){
    const edit = this.user.findIndex(userid => userid.id===id);
    this.username=this.user[edit].name;
    this.usermark=this.user[edit].mark;
  
  }
  update(){
   
    
  }
}
