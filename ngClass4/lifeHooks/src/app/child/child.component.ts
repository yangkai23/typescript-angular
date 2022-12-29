import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked{
counter:number=0;
interval:any;
@Input() username:any;
@ContentChild("cheader",{static:false})celement:any;
  constructor() {
    console.log("the Constructor of the child component has been invoked  "+this.celement);
   }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit of child component has been called");
    
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked of child component has been called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked of child component has been called  "+this.celement);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit of child component has been called  "+this.celement);
  }
  ngDoCheck(): void {
   console.log("ngDoCheck of child component has been called");
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges on child component has been called");
    console.log(changes);
    
  }
  ngOnDestroy(): void {
    console.log("child component has been destroyed");
    // clearInterval(this.interval);
    
  }

  ngOnInit(): void {
    // this.interval=setInterval(()=>{
    //   this.counter++;
    //   console.log(this.counter);
    // },1000)
    console.log("ngOnInit of child component has been called   "+this.celement);
    
  }

}
