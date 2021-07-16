import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export type EventTypes= 'Started'|'Paused'|'Resetted';

export interface ClickLogsSS{
  started:number;
  paused:number;
}

export class EventLogsSS{

  constructor(public id:number,public eventType:EventTypes,public eventTime:Date){}
}

@Injectable()
export class CountdownStateService {

  constructor() { }
  //Behavior subject to provide initial value
  // with this when we pause timer we dont need another variable to store value when
  // resuming we can just take the value from behavior subject as stores it last emitted value
  public timerSubject = new BehaviorSubject<number>(-1);
  public isTimerPausedSubject = new BehaviorSubject<boolean>(false);
  private intervalTimer:any;

  public clickLogsSubject = new BehaviorSubject<ClickLogsSS>({started:0,paused:0});
  public eventLogsSubject = new BehaviorSubject<EventLogsSS[]>([]);

  startNewTimer(value:number)
  {
    this.timerSubject.next(value);

    this.intervalTimer = setInterval(()=>{

      let currentValue= this.timerSubject.value-1;
      this.timerSubject.next(currentValue);

      if(currentValue == -1 && this.intervalTimer)
      {
        clearInterval(this.intervalTimer);
      }

    },1000)

    //Click Logs
    let currentClickLogs:ClickLogsSS=this.clickLogsSubject.value;
    this.updateClickLogs(currentClickLogs.started+1,currentClickLogs.paused);

    //Event Logs
    this.updateEventLogs("Started");
    
  }
  //Clear the interval and emit for timer is paused
  pauseTimer()
  {
    if(this.intervalTimer)
    {
      clearInterval(this.intervalTimer);
      this.isTimerPausedSubject.next(true);
    }
    //Click Logs
    let currentClickLogs:ClickLogsSS=this.clickLogsSubject.value;
    this.updateClickLogs(currentClickLogs.started,currentClickLogs.paused+1);

    //Event Logs
    this.updateEventLogs("Paused");
  }
  //This reset timer,timerPaused and Input field
  resetTimer()
  {
    if(this.intervalTimer)
    {
      clearInterval(this.intervalTimer);
    }
    this.timerSubject.next(-1);

    this.isTimerPausedSubject.next(false);

    //Event Logs
    this.updateEventLogs("Resetted");
  }

  private updateClickLogs(started:number,paused:number)
  {
    this.clickLogsSubject.next(
      {started,paused}
      );
  }
  private updateEventLogs(eventType:EventTypes)
  {
    let currentEventLogs:EventLogsSS[]=[...this.eventLogsSubject.value];
    currentEventLogs.push(new EventLogsSS(currentEventLogs.length+1,eventType,new Date()))
    this.eventLogsSubject.next(currentEventLogs);
  }

  clearEverythingWhenRouteisGettingDestroyed()
  {
    this.resetTimer();
    this.eventLogsSubject.next([]);
    this.clickLogsSubject.next({paused:0,started:0});
  }
}
