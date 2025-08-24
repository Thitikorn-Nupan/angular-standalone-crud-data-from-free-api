import {Component, OnInit} from '@angular/core';
import {ReadsReadUpdateDeleteProductsComponent} from "../reads-read-update-delete-products/reads-read-update-delete-products.component";
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
  protected disableReadsReadUpdateDeleteProductsComponent = false;

  constructor() {
  }

  ngOnInit(): void {
    // *** use local storage is better for this case
    const loggedIn = localStorage.getItem('loggedIn')!
    if (loggedIn === 'false' || loggedIn === null) {
      this.disableReadsReadUpdateDeleteProductsComponent = false
    } else {
      this.disableReadsReadUpdateDeleteProductsComponent = true
    }

  }



}
