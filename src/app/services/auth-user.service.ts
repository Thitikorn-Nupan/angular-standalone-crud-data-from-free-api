import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private checkUserLoggedIn = false
  // ReplaySubject is sub of Observable i will use it As local storage
  // *** Note if page has reload this service will reload too it means user had has logged in again
  // ** this is a weakness
  public userLoggedIn : ReplaySubject<string>;

  constructor() {

    this.userLoggedIn = new ReplaySubject<string>();
    this.userLoggedIn.next('false')
  }

  public login(username: string, password: string): Observable<any> {
    let response = "false"
    // Just a short if condition
    this.checkUserLoggedIn = username == 'ttknp' && password == '12345'
    // if correct username and password
    if (this.checkUserLoggedIn) {
      response = "true"
    }
    // store response to local storage on web browser it'll be true and false as string only
    //
    localStorage.setItem('loggedIn', response);
    // publish data as response on userLoggedIn.next(data) ** it'll be true and false as string only
    this.userLoggedIn.next(response);
    // now you can get data as response by subscribe(...) or you can use local storage
    return this.userLoggedIn;

  }


}
