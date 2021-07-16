import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomButtonComponent implements OnInit {

  constructor() { }
  @Input() buttonId:number|undefined;

  ngOnInit(): void {
  }

  showAlert()
  {
    alert(`Button ${this.buttonId ? this.buttonId : ""} is clicked`);
  }

}
