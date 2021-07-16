import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'route1',loadChildren:()=> import('./floating-banner/floating-banner.module').then(m=>m.FloatingBannerModule)},
  {path:'route2',loadChildren:()=> import('./e-com/e-com.module').then(m=>m.EComModule)},
  {path:'route3',loadChildren:()=>import('./countdown-input-output/countdown-input-output.module').then(m=>m.CountdownInputOutputModule)},
  {path:'route4',loadChildren:()=> import('./countdown-service-subject/countdown-service-subject.module').then(m=>m.CountdownServiceSubjectModule)},
  {path:'route5',loadChildren:()=> import('./table-view/table-view.module').then(m=>m.TableViewModule)},
  {path:'route6',loadChildren:()=> import('./dynamic-buttons/dynamic-buttons.module').then(m=>m.DynamicButtonsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
