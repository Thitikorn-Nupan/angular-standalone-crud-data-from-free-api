import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../entities/product";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CurrencyPipe
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  private activatedRoute: ActivatedRoute // for retrieve params on path that sent by get method
  private productService: ProductService
  private router: Router
  protected product : Product = new Product(0,'',0,'','','');

  constructor(activatedRoute: ActivatedRoute, productService: ProductService , router: Router) {
    console.log('UpdateProductComponent class work')
    this.activatedRoute = activatedRoute
    this.productService = productService
    this.router = router
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")! // get param on url
    this.productService.getProducts().subscribe(
      response => {
        response.filter(product => {
          if (product.id === Number(id)) {
            this.product = product
          }
        })
      })
  }


  onClickedSubmitFormUpdate(formUpdate: any) {

    // console.log(`old title : ${this.product.title}  , id : ${this.product.id}`)
    const title = formUpdate['title']
    const price = formUpdate['price']
    const description = formUpdate['description']
    // update entities
    this.product.title = title
    this.product.price = price
    this.product.description = description
    // console.log(`new title : ${this.product.title} , id : ${this.product.id}`)

    this.productService.updateProduct(this.product.id,this.product)

    this.router.navigateByUrl('/options')

  }
}
