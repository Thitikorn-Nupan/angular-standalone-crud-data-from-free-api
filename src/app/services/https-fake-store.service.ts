import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../entities/product";

@Injectable({
  providedIn: 'root'
})
export class HttpsFakeStoreService { // this service work for loading entity as json

  // private httpClient: HttpClient;
  private baseUrl: string = environment.productUrls;

  constructor(private httpClient: HttpClient) {
    // this.httpClient = httpClient;
  }

  public retrieveAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl)
  }

}
