import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CountdownStateService } from '../countdown-state.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-countdown-create-resetss',
  templateUrl: './countdown-create-resetss.component.html',
  styleUrls: ['./countdown-create-resetss.component.scss'],
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
export class CountdownCreateResetssComponent implements OnInit ,OnDestroy{

  constructor(private countdownStateService:CountdownStateService) { }
  mySubscriptions:Subscription = new Subscription();

  newTimer = new FormControl('',[Validators.required,Validators.min(1)]);
  pausedTimerArray:number[]=[];
  timer:number=-1;
  timerPaused:boolean=false;

  ngOnInit(): void {
    //Timer Subscription
    this.mySubscriptions?.add(
      this.countdownStateService.timerSubject.subscribe((timerValue:number)=>{
        console.log(timerValue);
        this.timer=timerValue;
      })
    )

    //Timer Paused or not subscription
    this.mySubscriptions.add(
      this.countdownStateService.isTimerPausedSubject.subscribe((timerPaused:boolean)=>{
        console.log(timerPaused)
        this.timerPaused=timerPaused;
      })
    )
  }

  resetTimer(){

    // this.countdownStateService.timerSubject.next(-1);
    this.countdownStateService.resetTimer();

  }
  createOrPauseTimer()
  {
    //Start Timer from new - no current timer and input is also valid
    if(this.newTimer.valid && this.timer == -1)
    {
      this.countdownStateService.startNewTimer(this.newTimer.value);
      //after starting counter disable and reset the input field
      this.newTimer.reset();
      // this.newTimer.disable();
    }
    //Pause Timer - as timer is running and not paused
    else if(this.timer > 0  && ! this.timerPaused )
    {
      this.countdownStateService.pauseTimer();
      this.pausedTimerArray.push(this.timer);
    }
    //Resume timer which was paused
    else if(this.timerPaused && this.timer>=0)
    {
      this.countdownStateService.startNewTimer(this.countdownStateService.timerSubject.value);
      //This is important after starting the timer again we have to do this
      this.countdownStateService.isTimerPausedSubject.next(false);
    }
  }

  ngOnDestroy()
  {
    this.mySubscriptions.unsubscribe();
  }

}
