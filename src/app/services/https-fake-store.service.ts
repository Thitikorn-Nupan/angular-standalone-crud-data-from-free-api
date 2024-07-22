import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../entities/product";

@Injectable({
  providedIn: 'root'
})
// this service work for loading entity as json
export class HttpsFakeStoreService {

  private httpClient: HttpClient;
  private baseUrl: string = environment.productUrls;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public retrieveAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl)
  }

}
