import { Component, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  constructor() { 
  console.log("child component has been created");

  }
  
  ngOnInit(): void {
  }
  ngOnDestroy():void{
    console.log("child component has been destroyed");
    
  }
  
  @Input() childValue:any
  @Output() message:EventEmitter<string> =new EventEmitter<string>();
  passData(){
    this.message.emit("message from child component")
  }
}
