import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductComponent } from './product/product.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ProductsContainerComponent}
]


@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ProductsContainerComponent
  ]
})
export class EComModule { }
