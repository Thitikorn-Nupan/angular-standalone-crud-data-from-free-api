import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from "@angular/core";

/**
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
  private router: Router

  constructor(router: Router) {
    this.router = router
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>  {
    const loggedIn = localStorage.getItem('loggedIn')!
    const url = state.url // '/options' , /update/1

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

    if (loggedIn === null || loggedIn ==='false') {
      this.router.navigateByUrl('login')
      return true
    }

    return false // if return false won go to any path you set
  }
}
