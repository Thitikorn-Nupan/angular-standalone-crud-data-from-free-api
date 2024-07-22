import {Component} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Product} from "../../entities/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  private productService: ProductService;
  private router: Router;

  constructor(productService: ProductService, router: Router) {
    this.productService = productService;
    this.router = router;
  }

  onClickedSubmitFormCreate(formCreate: any) {

    const imageUrls = formCreate['image'];
    const title = formCreate['title'];
    const description = formCreate['description'];
    const price = formCreate['price'];
    const category = formCreate['category'];

    // console.log(imageUrls, title, description, price,category);

    const product = new Product(0, title, price, description, category, imageUrls)

    this.productService.createProduct(product)

    this.router.navigateByUrl('/options')

  }
}
