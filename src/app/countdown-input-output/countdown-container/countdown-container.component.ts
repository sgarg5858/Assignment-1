import { Component, OnInit } from '@angular/core';

type eventNameType= 'Started'|'Paused'|'Resetted'

export class EventLog{
 constructor(public eventId:number,public eventName:eventNameType,public eventTime:Date){}
}

export class ClickLogs
{
  constructor(public started:number,public paused:number){}
}

@Component({
  selector: 'app-countdown-container',
  templateUrl: './countdown-container.component.html',
  styleUrls: ['./countdown-container.component.scss']
})
export class CountdownContainerComponent implements OnInit {

  //This represents timer value 
  // -1 means initial value -reset
  // >0 timer running or paused
  timer:number=-1;

  //This will be used to store setInterval of Timer
  intervalTimer:any;

  //This is to store is timer is paused or not...
  isTimerPaused:boolean=false;

  // For Keeping Track of Events
  eventLogs:EventLog[]=[];
  //click Logs
  clickLogs:ClickLogs= new ClickLogs(0,0);

  constructor() { }

  ngOnInit(): void {
  }
//This function is called when we start/pause/reset timer from child component
  timerChange(timerValue:number)
  {

    //Timer Value Start Timer
    if(timerValue > 0 ) 
    {
      this.timer=timerValue;
      this.startTheInterval();
      this.eventLogs=[...this.eventLogs,new EventLog(this.eventLogs.length+1,'Started',new Date())]
      this.clickLogs= new ClickLogs(this.clickLogs.started+1,this.clickLogs.paused)
    }
    //-2 Means pause
    //Here set the timerPaused and clear Interval
    // -2 is just for pausing we wont set the value for timer
    if(timerValue==-2)
    {
      console.log("Pause Case");

      this.isTimerPaused=true;
      
      if(this.intervalTimer)
      {
        clearInterval(this.intervalTimer);
      }

      this.eventLogs=[...this.eventLogs,new EventLog(this.eventLogs.length+1,'Paused',new Date())]
      this.clickLogs= new ClickLogs(this.clickLogs.started,this.clickLogs.paused+1)
    }
    //Reset Case
    if(timerValue == -1)
    {
      this.timer = timerValue;
      if(this.intervalTimer)
      {
        clearInterval(this.intervalTimer);
      }
      this.isTimerPaused=false;
      this.eventLogs=[...this.eventLogs,new EventLog(this.eventLogs.length+1,'Resetted',new Date())]
      // this.eventLogs.push({eventName:'Resetted',eventTime:new Date()})
    }
    
  }

  startTheInterval()
  {
    this.isTimerPaused=false;
    this.intervalTimer = setInterval(()=>{

      this.timer --;
      //Stop the timer at -1
      if(this.timer==-1)
      {
        clearInterval(this.intervalTimer);
      }

    },1000)
  }
  

}
