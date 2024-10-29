import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  todaysDate:any;
  habitList:any = [];
  displayNotes:boolean = false;
  emptyError: boolean =false;
  completeList:any = [];
  oneComplete:boolean = false;
  greenWidth : any;
  greyWidth :any;
  alreadyCompletedError:boolean = false;
  fakeArray:any =[];
  temp:any;

  ngOnInit(){
  
  // to display todays date.
  this.todaysDate= Date.now();

  if(this.habitList.length == 0 || this.habitList.length == null)
  {
    this.displayNotes = false;
  }
  else{
    this.displayNotes = true;
  }
  }
  

  element:any;
  val:any=null;

  inputFunction(){
    this.alreadyCompletedError =false;
    this.emptyError= false;


  }
  addHabit(){
    this.alreadyCompletedError =false;
    this.element= document.getElementById("habitInput")!;
    this.val = this.element.value;

    if(this.val != null && this.val != "" && this.val != '' && this.val.length != 0 && this.val.length != null)
    {
      this.emptyError= false;
      this.displayNotes = true;
      this.habitList.push([this.val, null]);
      this.element.value="";
    }
    else{
      this.emptyError = true;
    }
    this.greenWidth =  this.completeList.length;
      this.greyWidth = this.habitList.length-this.greenWidth;
      this.fakeArray = new Array(this.greyWidth);
    }

  resetHabit(){
    this.habitList= [];
    this.completeList =[];
    this.displayNotes = false;
    this.oneComplete = false;
    this.fakeArray =[];
    this.temp=null;
    this.alreadyCompletedError = false;
  }

  
  markComplete(habit:string, value:boolean){
    console.log(this.habitList);
    console.log("inside func",habit, value);         

    this.temp = this.habitList.findIndex((x: string) => x[0] === habit);

    if(this.habitList[this.temp][1] != false && this.habitList[this.temp][1] != true ){

      console.log("inside if",habit, value);         
      this.oneComplete = true;
      
      
      this.habitList[this.temp][1] = true;
      console.log("complete list1", this.completeList);

      this.completeList.push(habit);
      console.log("complete list2", this.completeList);

      this.greenWidth =  this.completeList.length;
      this.greyWidth = this.habitList.length-this.greenWidth;
      console.log("green grey wid", this.greenWidth, this.greyWidth);
      this.fakeArray = new Array(this.greyWidth);
      console.log("habit list", this.habitList);

    }

    else{
      this.alreadyCompletedError = true;
    }
  }


}
