import {Component,  OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../entities/product";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { RouterLink} from "@angular/router";

@Component({
  selector: 'app-reads-read-update-delete-products',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './reads-read-update-delete-products.component.html',
  styleUrl: './reads-read-update-delete-products.component.css'
})
export class ReadsReadUpdateDeleteProductsComponent implements OnInit {

  private productService: ProductService;
  protected products: Product[] = []
  protected productsByCategory: Product[] = []
  // same if category default is no value won select
  protected category: string = '';
  // [checked]="categoryAll" if categoryAll has value => '<has value will select to be default>'
  protected categoryAll: string = 'all';
  protected readonly categories = [
    {value: 'all', label: 'All', id: 'radio1'},
    {value: 'electronics', label: 'Electronics', id: 'radio2'},
    {value: 'jewelery', label: 'Jewelery', id: 'radio3'},
    {value: 'women\'s clothing', label: 'Women\'s clothing', id: 'radio4'},
    {value: 'men\'s clothing', label: 'Men\'s clothing', id: 'radio5'}
  ]

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => {
        // can change
        this.productsByCategory = response
        // hold the default products
        this.products = response
      }
    )
  }

  protected onCategoryChange() {
    this.categoryAll = '' // ** clear selected radio category all
    this.productsByCategory = this.products.filter(product => product.category === this.category)
    if (this.productsByCategory.length == 0) this.productsByCategory = this.products
  }

  protected onRemoveClicked(id: number) {
    this.productService.deleteProduct(id)
  }


}
