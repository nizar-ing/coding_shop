import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderHistory} from "../common/order-history";
import {Observable} from "rxjs";


interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl: string = "http://localhost:8080/api/orders";

  constructor(private httpClient: HttpClient) {}
  getOrderHistory(currentEmail: string): Observable<GetResponseOrderHistory>{
    // need to build URL based on the customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${currentEmail}`;
    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }
}
