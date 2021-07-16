import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownStateService } from '../countdown-state.service';
import {ClickLogsSS} from '../countdown-state.service'
@Component({
  selector: 'app-countdown-click-trackerss',
  templateUrl: './countdown-click-trackerss.component.html',
  styleUrls: ['./countdown-click-trackerss.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountdownClickTrackerssComponent implements OnInit,OnDestroy {

  clickLogsSubscription = new Subscription();
  clickLogs:ClickLogsSS={started:0,paused:0};

  constructor(private countdownStateService:CountdownStateService,
    private changeDetector:ChangeDetectorRef
    ) { }

  ngOnInit(): void {

    this.clickLogsSubscription.add(
      this.countdownStateService.clickLogsSubject.subscribe((clickLogs:ClickLogsSS)=>{
        console.log(clickLogs);
        this.clickLogs = clickLogs;
        this.changeDetector.detectChanges();
      })
    )

  }
  ngOnDestroy()
  {
    if(this.clickLogsSubscription)
    {
      this.clickLogsSubscription.unsubscribe();
    }
  }

}
