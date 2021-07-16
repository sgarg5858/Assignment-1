import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownContainerssComponent } from './countdown-containerss/countdown-containerss.component';
import { CountdownTimerssComponent } from './countdown-timerss/countdown-timerss.component';
import { CountdownCreateResetssComponent } from './countdown-create-resetss/countdown-create-resetss.component';
import { CountdownClickTrackerssComponent } from './countdown-click-trackerss/countdown-click-trackerss.component';
import { CountdownLogsssComponent } from './countdown-logsss/countdown-logsss.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { CountdownStateService } from './countdown-state.service';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes:Routes=[
  {path:'',component:CountdownContainerssComponent}
]


@NgModule({
  declarations: [
    CountdownContainerssComponent,
    CountdownTimerssComponent,
    CountdownCreateResetssComponent,
    CountdownClickTrackerssComponent,
    CountdownLogsssComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[]
  ,providers:[
    CountdownStateService
  ]
})
export class CountdownServiceSubjectModule { }
