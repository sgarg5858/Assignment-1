import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ps-assignment';
  showContent:boolean=false;
  constructor(private activatedRoute:Router)
  {}

  ngOnInit()
  {
    this.activatedRoute.events.subscribe((val)=>{
      if(val instanceof NavigationEnd)
      {
        if(val.url=='/')
        {
          this.showContent=true;
        }
        else
        {
          this.showContent=false;
        }
      }
    })
  }
}
