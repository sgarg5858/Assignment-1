import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { SortableColumnComponent } from './sortable-column/sortable-column.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { SortableTableDirective } from './sortable-table.directive';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:StudentsComponent}
]



@NgModule({
  declarations: [
    StudentsComponent,
    SortableColumnComponent,
    SortableTableDirective
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    StudentsComponent
  ]
})
export class TableViewModule { }
