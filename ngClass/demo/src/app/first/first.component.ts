import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 test="angular";
 inputval="clarivate";
 flag=true;
 c1="red";
 c2="blue";
 spanval=2;
 display(){
  console.log("this is diplay method");
  
 }
 testv="anirudh"
}

