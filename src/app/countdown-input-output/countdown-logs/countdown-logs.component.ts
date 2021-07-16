import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventLog } from '../countdown-container/countdown-container.component';

@Component({
  selector: 'app-countdown-logs',
  templateUrl: './countdown-logs.component.html',
  styleUrls: ['./countdown-logs.component.scss'],
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
export class CountdownLogsComponent implements OnInit,OnChanges {

  @Input() eventLogs:EventLog[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(simpleChanges:SimpleChanges)
  {
    console.log(simpleChanges)
  }
  trackByEventId(index:number,event:EventLog)
  {
    return event.eventId;
  }

}
