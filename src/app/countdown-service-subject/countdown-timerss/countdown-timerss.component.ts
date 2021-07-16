import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownStateService } from '../countdown-state.service';

@Component({
  selector: 'app-countdown-timerss',
  templateUrl: './countdown-timerss.component.html',
  styleUrls: ['./countdown-timerss.component.scss']
})
export class CountdownTimerssComponent implements OnInit,OnDestroy {

  constructor(private countdownStateService:CountdownStateService) { }
  timer:number=-1;
  myTimerSubscription:Subscription|undefined;

  ngOnInit(): void {
    this.myTimerSubscription = this.countdownStateService.timerSubject.subscribe((timerValue:number)=>{
      this.timer=timerValue;
    })
  }
  ngOnDestroy()
  {
    if(this.myTimerSubscription)
    {
      this.myTimerSubscription.unsubscribe();
    }
  }

}
