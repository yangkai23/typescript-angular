import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData(){
    return [
      {"name":"Anirudh","id":"cl012","designation":"developer"},
      {"name":"Hrushi","id":"cl013","designation":"grc Admin"},
      {"name":"Revanth","id":"cl015","designation":"sap-mm consultant"}
    ]
  }
}
