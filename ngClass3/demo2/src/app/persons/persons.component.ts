import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
persons:any;
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.persons=this.user.getData();
  }

}
