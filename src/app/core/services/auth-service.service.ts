import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isLoggedIn():boolean{
    const localData = localStorage.getItem("logintoken");
    console.log('hg',localData);
    if (localData!=null) {
      return true;
    } else {
      return false;
    }
  }
}
