import { ChangeDetectorRef, Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
  
})
export class ContainerComponent implements OnInit {

  constructor(
    private componentFactoryResolver:ComponentFactoryResolver,
    private injector:Injector,
    private cd:ChangeDetectorRef
    ) { }

  @ViewChild('quizContainer',{read:ViewContainerRef}) quizContainer:ViewContainerRef|undefined;

  ngOnInit(): void {
  }

  async startQuiz()
  {
    if(this.quizContainer)
    {
     // This is main for lazy loading
     //When using es2017 use promise.then to do this not async await' zonejs doesnt work with async await 
    const {QuizComponent} = await import('./../quiz/quiz.component');
    const quizComponentFactory = this.componentFactoryResolver.resolveComponentFactory(QuizComponent);
    const instance = this.quizContainer.createComponent(quizComponentFactory,undefined,this.injector);

    instance.instance.name="Sanjay";
    instance.instance.nameChanges.subscribe((val:string)=>{
      console.log(val);
    })

    this.cd.detectChanges();
  
    }
  }

}
