import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations:[
    trigger('fade',[
    state('in',style({
      'opacity':'1',
      transform:'translateY(0px)'
    })),
    transition('void => *',
    [
      style({
        'opacity':'0',
        transform:'translateY(100px)'
      }),
      animate(400,keyframes([
        style({
          transform:'translateY(80px)',
          'opacity':'0.2',
        }),
        style({
          transform:'translateY(60px)',
          'opacity':'0.4',
        }),
        style({
          transform:'translateY(40px)',
          'opacity':'0.6',
        }),
        style({
          transform:'translateY(20px)',
          'opacity':'0.8',
        }),
        style({
          transform:'translateY(0px)',
          'opacity':'1.0',
        }),
      ]))
    ]
    )
  ])
  ]
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() product:Iproduct | undefined;
  imageLoaded:boolean=false;

  ngOnInit(): void {
  }
  imageLoad()
  {
    this.imageLoaded=true;
    console.log("Now")
  }

}
