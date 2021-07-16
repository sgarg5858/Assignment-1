import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, HostListener, NgZone, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit,AfterViewInit {



  @ViewChild('viewContainer',{read:ViewContainerRef}) viewContainer:ViewContainerRef|undefined;
  @ViewChild('divContainer',{read:ElementRef}) divContainer:ElementRef|undefined;
  @ViewChild('trackingElement',{read:ElementRef}) trackingElement:ElementRef|undefined;

  constructor(
    private componentFactoryResolver:ComponentFactoryResolver,
    private changeDetector:ChangeDetectorRef,
    private ngZone:NgZone,
    ) { }
  buttonsCounter:number=0;


  ngOnInit(): void {
    
  }

  ngAfterViewInit()
  {
    
    this.addButtonsDynamicallyInView();

    if("IntersectionObserver" in window){
      const trackingElementObserver = new IntersectionObserver(
        (entries,observer)=>{
          entries.forEach((entry)=>{
            // console.log(entry);

            if(entry.isIntersecting)
            {
              console.log("Adding")
              this.addButtonsDynamicallyInView();
            }
          })
        }
      )
      trackingElementObserver.observe(this.trackingElement?.nativeElement)
    }
  }

  addButtonsDynamicallyInView()
  {
    for(let i=0;i<10;i++)
    {
      const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomButtonComponent);
      const component = this.viewContainer?.createComponent(dynamicComponentFactory);
      this.buttonsCounter++;
      if(component)
      {
        component.instance.buttonId=this.buttonsCounter;
        this.changeDetector.detectChanges();
      }
    }
  }

}
