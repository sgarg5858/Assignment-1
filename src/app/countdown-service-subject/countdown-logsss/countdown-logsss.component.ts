import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CountdownStateService, EventLogsSS } from '../countdown-state.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-countdown-logsss',
  templateUrl: './countdown-logsss.component.html',
  styleUrls: ['./countdown-logsss.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('list',[
    state('in',style({
      'opacity':'1',
      'transform':'translateX(0)'
    })),
    transition('void => *',
    [
      style({
        'opacity':'0',
        'transform':'translateX(-100px)'
      }),
      animate(400)
    ]
    )
  ])
  ]
})
export class CountdownLogsssComponent implements OnInit,OnDestroy {


  // eventLogsSubscription = new Subscription();
  eventLogs$:Observable<EventLogsSS[]>|undefined;

  constructor(private countdownStateService:CountdownStateService,private changeDetector:ChangeDetectorRef) { }

  ngOnInit(): void {

    // this.eventLogsSubscription.add(
    //   this.countdownStateService.eventLogsSubject.subscribe((eventLogs:EventLogsSS[])=>{
    //     this.eventLogs=eventLogs;
    //     console.log(this.eventLogs);
    //     this.changeDetector.detectChanges();
    //   })
    // )
    this.eventLogs$=this.countdownStateService.eventLogsSubject;

  }
  trackByEventId(index:number,event:EventLogsSS)
  {
    return event.id;
  }

  ngOnDestroy()
  {
    // if(this.eventLogsSubscription)
    // {
    //   this.eventLogsSubscription.unsubscribe();
    // }
  }

}
