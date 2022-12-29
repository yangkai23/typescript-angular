import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
result:any;
flag=false;
  constructor() { }

  ngOnInit(): void {
  }
  
  parentValue="parent";
  getData(value:any){
    this.result=value;
  }
  toggleChild(){
    this.flag=!this.flag;
  }
}