import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColumnCommunicationService, ColumnSortedEvent } from '../column-communication.service';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: '[sortable-column]',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class SortableColumnComponent implements OnInit,OnDestroy {

  @Input('sortable-column') columnName:string= '';

  sortDirection:string='';
  
  @HostListener('click')
  sort()
  {
    if(this.sortDirection == '')
    {
      this.sortDirection = 'asc';
    }
    else if(this.sortDirection == 'asc')
    {
      this.sortDirection ='desc';
    }
    else
    {
      this.sortDirection = ''
    }

    this.columnCommunicationService.columnSorted({sortColumn:this.columnName,sortDirection:this.sortDirection})
  }

  columnSortedSubscription:Subscription = new Subscription();

  constructor(private columnCommunicationService:ColumnCommunicationService) { }


  ngOnInit(): void {

    this.columnSortedSubscription.add(
      this.columnCommunicationService.columnSorted$.subscribe((event:ColumnSortedEvent)=>{
        if(this.columnName!=event.sortColumn)
        {
          this.sortDirection='';
        }
      })
    )

  }
  ngOnDestroy()
  {
    if(this.columnSortedSubscription)
    {
      this.columnSortedSubscription.unsubscribe();
    }
  }

}
