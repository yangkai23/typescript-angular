import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
persons:any;
  constructor(private user:UserService) { }

  ngOnInit(): void {
this.persons=this.user.getData();
  }

}
