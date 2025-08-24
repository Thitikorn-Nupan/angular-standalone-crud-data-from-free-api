import {Injectable} from '@angular/core';
import {HttpsFakeStoreService} from "./https-fake-store.service";
import { ReplaySubject} from "rxjs";
import {Product} from "../entities/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService { // onInit does not work on services class

 //  private httpsFakeStoreService: HttpsFakeStoreService
  private readonly productsReplaySubject: ReplaySubject<Product[]>
  private products : Product[] = []

  constructor(private httpsFakeStoreService: HttpsFakeStoreService) {
    this.productsReplaySubject = new ReplaySubject<Product[]>();
    this.initialProducts();
  }

  private initialProducts() {
    this.httpsFakeStoreService.retrieveAllProducts().subscribe(response => {
      this.products = response // for crud
      this.productsReplaySubject.next(response) // for publish after crud
    })
  }

  public getProducts(): ReplaySubject<Product[]> {
    return this.productsReplaySubject
  }

  public deleteProduct(id: number) {
    // can't use id for removing because if some id deleted next id will stay at the same element
    let pid = this.products.find(product => product.id === id)
    this.products.splice(this.products.indexOf(pid!), 1); // delete by id
    this.productsReplaySubject.next(this.products) // then publish
  }

  public updateProduct(id: number, product: Product) {
    // find object by id
    const isProductExits = this.products.find(product => product.id === id)
    if (isProductExits !== undefined) {
      // use object for finding real element on array
      const index = this.products.indexOf(isProductExits!)
      // replace object at the same position it was stayed
      this.products[index] = product
      // update products
      this.productsReplaySubject.next(this.products)
    }
  }

  public createProduct(product: Product) {
    const lastIndex = this.products.length
    product.id = lastIndex+1
    this.products.push(product)
    this.productsReplaySubject.next(this.products)
  }

}
