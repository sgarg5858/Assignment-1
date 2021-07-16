import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ColumnCommunicationService, ColumnSortedEvent } from '../column-communication.service';
import { Student, StudentDataService} from '../student-data.service'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students : Student[]=[];

  constructor(private studentDataService:StudentDataService,private columnCommunicationService:ColumnCommunicationService) { }
  
  myStudents$=new BehaviorSubject<Student[]>([]);
  // myStudents$=new Subject<Student[]>();

  ngOnInit(): void {

    this.students= this.studentDataService.getStudents();
    this.myStudents$.next(this.students);

  }

  onSorted(event:ColumnSortedEvent)
  {
    // console.log(event);
    let students:Student[]=[...this.students];

    //just reset data!
    if(event.sortDirection == '')
    {
      students.sort((a:any,b:any)=>{ return a["Id"] - b["Id"] });
    }
    // if data type is string
    else if(event.sortColumn== 'Section' || event.sortColumn=='Name' )
    {
      if(event.sortDirection=='asc')
      {
        students.sort((a:any,b:any)=>{ return (<string>a[event.sortColumn]).localeCompare( (<string>b[event.sortColumn]) )});
      }
      else
      {
        students.sort((a:any,b:any)=>{ return (<string>b[event.sortColumn]).localeCompare( (<string>a[event.sortColumn]) )});
      }
    }
    //Numeric fields
    else
    {
    if(event.sortDirection=='asc' )
    {
      students.sort((a:any,b:any)=>{ return a[event.sortColumn] - b[event.sortColumn] });
    }
    else
    {
      students.sort((a:any,b:any)=>{ return b[event.sortColumn] - a[event.sortColumn] });

    }
    }
    this.myStudents$.next(students);
  }

}
