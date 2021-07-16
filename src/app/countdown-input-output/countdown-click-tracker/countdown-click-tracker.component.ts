import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClickLogs, EventLog } from '../countdown-container/countdown-container.component';

@Component({
  selector: 'app-countdown-click-tracker',
  templateUrl: './countdown-click-tracker.component.html',
  styleUrls: ['./countdown-click-tracker.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountdownClickTrackerComponent implements OnInit {

  @Input() clickLogs:ClickLogs = new ClickLogs(0,0);
  constructor() { }

  ngOnInit(): void {
  }
  
}
