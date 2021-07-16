import { Directive, Output,EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColumnCommunicationService, ColumnSortedEvent } from './column-communication.service';
import {  StudentDataService } from './student-data.service';

@Directive({
  selector: '[SortableTable]'
})
export class SortableTableDirective implements OnInit,OnDestroy{

  constructor(private columnCommunicationService:ColumnCommunicationService) { }

  private tableSortedSubscription:Subscription= new Subscription();
  @Output() sorted= new EventEmitter();

  ngOnDestroy(){
    this.tableSortedSubscription.unsubscribe();
  }

  ngOnInit()
  {
    this.tableSortedSubscription.add(

      this.columnCommunicationService.columnSorted$.subscribe((event:ColumnSortedEvent)=>{
        this.sorted.emit(event);
      })
      
    )
  }

}
