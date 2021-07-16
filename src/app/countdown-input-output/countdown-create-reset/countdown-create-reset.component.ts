import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-countdown-create-reset',
  templateUrl: './countdown-create-reset.component.html',
  styleUrls: ['./countdown-create-reset.component.scss'],
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
export class CountdownCreateResetComponent implements OnInit {

  constructor() { }
  @Input() timer:number = -1;
  @Output() timerChange = new EventEmitter<number>();
  @Input() isTimerPaused:boolean=false;
  newTimer:FormControl = new FormControl('',[Validators.required,Validators.min(1)])
  pausedTimer:number[]=[];

  ngOnInit(): void {
  }
  createOrPauseTimer()
  {
    //Creating New Timer - timer is not running and input is valid
    if(this.timer == -1 && this.newTimer.valid)
    {
      this.timerChange.emit(this.newTimer.value);
      this.newTimer.reset();
    }
    if(this.timer > 0)
    {
      //-1 for reset state 
      //-2 for paused state

      //If timer was paused then emit the current timer value
      if(this.isTimerPaused)
      {
        this.timerChange.emit(this.timer);
      }
      // if timer is running then and it is not paused then we have to pause it by emitting -2
      else
      {
        //to keep track of paused timers
      this.pausedTimer.push(this.timer);

      this.timerChange.emit(-2);
      }
      
    }

  }
  resetTimer()
  {
    this.timerChange.emit(-1);
    this.pausedTimer.splice(0,this.pausedTimer.length);
  }

}
