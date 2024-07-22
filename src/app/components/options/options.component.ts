import {Component, OnInit} from '@angular/core';
import {
  ReadsReadUpdateDeleteProductsComponent
} from "../reads-read-update-delete-products/reads-read-update-delete-products.component";
import {AuthUserService} from "../../services/auth-user.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    ReadsReadUpdateDeleteProductsComponent,
    NgIf
  ],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent implements OnInit {
  private authUserService : AuthUserService
  protected disableReadsReadUpdateDeleteProductsComponent = false;

  constructor(authUserService: AuthUserService) {
    this.authUserService = authUserService;
  }

  ngOnInit(): void {
    // this.authUserService.userLoggedIn.subscribe(
    //   response => {
    //     console.log(response)
    //     if (response === 'true') {
    //       this.disableReadsReadUpdateDeleteProductsComponent = true
    //     } else {
    //       this.disableReadsReadUpdateDeleteProductsComponent = false
    //     }
    //   }
    // )

    // *** use local storage is better for this case
    const loggedIn = localStorage.getItem('loggedIn')!
    if (loggedIn === 'false' || loggedIn === null) {
      this.disableReadsReadUpdateDeleteProductsComponent = false
    } else {
      this.disableReadsReadUpdateDeleteProductsComponent = true
    }

  }



}
