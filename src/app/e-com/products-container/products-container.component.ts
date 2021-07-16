import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatSelectChange } from '@angular/material/select';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Iproduct, ProductsService } from '../products.service';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {

  constructor(private productsService:ProductsService) { }
  ecomProducts:Iproduct[]=[]
  sortedProducts$:Observable<Iproduct[]>|undefined;
  sortOrder:"0"|"-1"|"1"="0";
  listType:"grid"|"list"="grid";

  ngOnInit(): void {
    this.sortedProducts$=this.productsService.getProducts().pipe(
      tap((products:Iproduct[])=>{
        this.ecomProducts=products;
      })
    );
  }
  sortByPrice(event:MatSelectChange)
  {
    console.log(event);
    let products = [...this.ecomProducts];
    products.sort((a:Iproduct,b:Iproduct)=>{
      if(event.value == "0")
      {
        return a.id -b.id;
      }
      else if(event.value == '1')
      {
        return a.price - b.price;
      }
      else
      {
        return b.price-a.price;
      }
    })
    this.sortedProducts$ = of(products);
  }
  trackById(index:number,product:Iproduct)
  {
    return product.id;
  }
  

}
