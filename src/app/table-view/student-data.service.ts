import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { delay, shareReplay } from 'rxjs/operators';

export interface Student{
  Id:number
  Name:string;
  Class:number;
  Section:string;
  Subject1:number
  Subject2:number;
  Subject3:number;
}


@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }
  students:Student[]=[
    {Id:1,Name:"Rahul",Class:3,Section:"A",Subject1:75,Subject2:60,Subject3:80},
    {Id:2,Name:"Rajat",Class:4,Section:"B",Subject1:45,Subject2:70,Subject3:54},
    {Id:3,Name:"Sanjay",Class:2,Section:"C",Subject1:65,Subject2:80,Subject3:75},
    {Id:4,Name:"Aartik",Class:5,Section:"D",Subject1:70,Subject2:70,Subject3:70},
    {Id:5,Name:"Prim",Class:3,Section:"A",Subject1:55,Subject2:60,Subject3:87},
    {Id:6,Name:"Sanyam",Class:4,Section:"B",Subject1:87,Subject2:98,Subject3:98},
    {Id:7,Name:"Mayank",Class:4,Section:"A",Subject1:90,Subject2:65,Subject3:76},
    {Id:8,Name:"Varun",Class:2,Section:"C",Subject1:35,Subject2:45,Subject3:65},
    {Id:9,Name:"Suruchi",Class:3,Section:"D",Subject1:78,Subject2:76,Subject3:76},
    {Id:10,Name:"Lukesh",Class:5,Section:"E",Subject1:95,Subject2:67,Subject3:87},
  ]
 
  getStudents()
  {
    return [...this.students];
  }

}
