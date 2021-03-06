import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColumnCommunicationService {

  constructor() { }

  private columnSortedSource = new Subject<ColumnSortedEvent>();
  columnSorted$ = this.columnSortedSource.asObservable();


  columnSorted(event: ColumnSortedEvent) 
  {
    this.columnSortedSource.next(event);
  }

}
