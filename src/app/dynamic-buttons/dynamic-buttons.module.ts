import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ContainerComponent}
]


@NgModule({
  declarations: [
    ContainerComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
  ]
})
export class DynamicButtonsModule { }
