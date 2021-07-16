import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountdownStateService } from '../countdown-state.service';

@Component({
  selector: 'app-countdown-containerss',
  templateUrl: './countdown-containerss.component.html',
  styleUrls: ['./countdown-containerss.component.scss']
})
export class CountdownContainerssComponent implements OnInit,OnDestroy {

  constructor(private countdownService:CountdownStateService) { }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
    this.countdownService.clearEverythingWhenRouteisGettingDestroyed();
  }

}
