import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthUserService} from "../services/auth-user.service";
import {Injectable} from "@angular/core";

/*
New way
export const manageRoutesGuard: CanActivateFn = (route, state) => {
  return true;
};
*/

// Old Way
@Injectable({
  providedIn: 'root'
})
export class ManageRoutesGuard implements CanActivate {
  // private authUserService : AuthUserService; it delays can't use userLoggedIn property
  private router: Router
  constructor(router: Router) {
    console.log('ManageRoutesGuard class works')
    this.router = router
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>  {
    console.log('canActivate method works')
    const loggedIn = localStorage.getItem('loggedIn')!
    const url = state.url // '/options' , /update/1
    console.log(url)
    // console.log(loggedIn,url)
    if (loggedIn === 'true' && url === '/options') {
      this.router.parseUrl(url)
      return true
    }
    if (loggedIn === 'true' && url.startsWith('/update')) {
      this.router.parseUrl(url)
      return true
    }
    if (loggedIn === 'true' && url === '/create') {
      this.router.parseUrl(url)
      return true
    }
    return false // if return false won go to any path you set
  }
}
