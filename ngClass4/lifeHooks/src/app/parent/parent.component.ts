import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit{
flag:boolean=false;
username:any;
// @ViewChild("pheader",{static:false})pelement:any;............ElementRef
@ViewChildren('pheader')pelement:any;//QueryList<any>
  constructor() {
    console.log("the parent component constructor has been invoked  "+this.pelement);
    
   }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked of parent component has been called  "+this.pelement);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit of parent component has been called  "+this.pelement);
  }
  ngAfterContentInit(): void {
  console.log("ngAfterContentInit of parent component has been called");
  
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked of parent component has been called");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck of parent component has been called");
    
  }
   ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges on parent component has been called");
    
  }
  ngOnInit(): void {
    console.log("ngOnInit of parent component has been called  "+this.pelement);
  }
toggleChild(){
  this.flag=!this.flag;
}

}
