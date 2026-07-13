import {Component, OnInit} from '@angular/core';
import {ReadsReadDeleteProductsComponent} from "../reads-read-delete-products/reads-read-delete-products.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    ReadsReadDeleteProductsComponent,
    NgIf
  ],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent implements OnInit {
  protected disableReadsReadUpdateDeleteProductsComponent : boolean = false;

  constructor() {}

  ngOnInit(): void {
    // *** use local storage is better for this case
    const loggedIn : string = localStorage.getItem('loggedIn')!
    if (loggedIn === 'false' || loggedIn === null) {
      this.disableReadsReadUpdateDeleteProductsComponent = false
    } else {
      this.disableReadsReadUpdateDeleteProductsComponent = true
    }
  }

}
