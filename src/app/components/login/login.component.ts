import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthUserService} from "../../services/auth-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private readonly router: Router;
  private readonly authUserService: AuthUserService
  protected message = ''

  constructor(authUserService: AuthUserService, router: Router) {
    this.authUserService = authUserService;
    this.router = router
  }

  ngOnInit(): void {
    // **** remember if page has reload userLoggedIn will be first case
    const loggedIn = localStorage.getItem('loggedIn')!
    if (loggedIn === 'false' || loggedIn === null) {
      this.message = 'Login is not done'
    } else {
      this.message = 'Login is done';
      this.router.navigate(['options'])
    }
  }

  protected onSubmit(formLogin: any) {
    const username = formLogin['username']
    const password = formLogin['password']
    this.authUserService.login(username, password).subscribe(response => {
      if (response === 'true') {
        // this.router.navigate(['/table-students']) *** navigate is based on the provided array of commands and a starting point. If no starting route is provided, the navigation is absolute.
        // *** same result just can pass only absolute route path.
        this.router.navigateByUrl('/options') // go to this path then guard service will work
      } else {
        this.router.navigateByUrl('/login')
      }
    })
  }
}
