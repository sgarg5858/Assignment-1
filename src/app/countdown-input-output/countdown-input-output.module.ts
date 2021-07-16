import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownCreateResetComponent } from './countdown-create-reset/countdown-create-reset.component';
import { CountdownLogsComponent } from './countdown-logs/countdown-logs.component';
import { CountdownClickTrackerComponent } from './countdown-click-tracker/countdown-click-tracker.component';
import { CountdownContainerComponent } from './countdown-container/countdown-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes:Routes=[
  {path:'',component:CountdownContainerComponent}
]

@NgModule({
  declarations: [
    CountdownTimerComponent,
    CountdownCreateResetComponent,
    CountdownLogsComponent,
    CountdownClickTrackerComponent,
    CountdownContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[
    CountdownContainerComponent
  ]
})
export class CountdownInputOutputModule { }
