import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  @Input() name:string="";

  @Output() nameChanges = new EventEmitter<string>();
  ngOnInit(): void {
  }
  nameControl = new FormControl('');

  submitName()
  {
    this.nameChanges.emit(this.nameControl.value);
  }


}

@NgModule({
  declarations:[QuizComponent],
  imports:[CommonModule,ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatCardModule]
})
export class QuizModule{}