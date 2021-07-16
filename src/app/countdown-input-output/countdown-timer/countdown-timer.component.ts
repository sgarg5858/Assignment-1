import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountdownTimerComponent implements OnInit {


  @Input() timer:number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
