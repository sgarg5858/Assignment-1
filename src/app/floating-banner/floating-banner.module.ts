import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes=[
  {path:'',component:BannerComponent}
]

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FloatingBannerModule { }
