import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  salesProducts=[
    {'name':'samsung','type':'mobile','price':'32000'},
  {'name':'realme','type':'earppods','price':'5200'},
  {'name':'firebolt','type':'smartwatch','price':'3500'}
]
revisedProducts=[
  {'name':'samsung','type':'mobile','price':'25000'},
{'name':'realme','type':'earppods','price':'3200'},
{'name':'firebolt','type':'smartwatch','price':'3000'}
]

}
