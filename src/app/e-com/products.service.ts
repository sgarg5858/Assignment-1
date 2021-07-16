import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

export interface Iproduct{
  id:number;
  name:string;
  title:string;
  image:string;
  category:string;
  price:number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  

  getProducts()
  {
    return this.httpClient.get<any>('https://fakestoreapi.com/products').pipe(
      catchError(()=>of([]))
    )
  }
  
}
