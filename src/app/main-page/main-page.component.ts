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
  emptyError!: boolean;
  completeList:any = [];
  oneComplete:boolean = false;
  ngOnInit(){
  this.todaysDate= Date.now();
  if(this.habitList.length == 0 || this.habitList.length == null)
  {
    this.displayNotes = false;
  }
  else{
    this.displayNotes = true;
  }
  }
  //todaysDate:any;
  

  element:any;
  val:any=null;
  addHabit(){
    this.element= document.getElementById("habitInput")!;
    this.val = this.element.value;
    console.log("hhh", this.val, this.val.length);

    if(this.val != null && this.val != "" && this.val != '' && this.val.length != 0 && this.val.length != null)
    {
      this.emptyError= false;
      this.displayNotes = true;
      this.habitList.push([this.val, false]);
      console.log("hhh",  this.habitList);
      this.element.value="";
    }
    else{
      this.emptyError = true;
    }
    

    }

  resetHabit(){
    this.habitList= [];
    this.displayNotes = false;
    this.oneComplete = false;
  }


  buttonText:any;
  markComplete(habit:any){
    let x = this.habitList.indexOf(habit[0]);
    this.oneComplete = true;
    console.log(habit, x)
    this.habitList[x+1][1] = true;
    this.completeList.push(habit[0]);
    

    this.buttonText = document.getElementById("markButton");
    this.buttonText.innerHTML = "Completed!";
    this.buttonText.style.backgroundColor = "green";
    this.buttonText.style.color = "white";

  }


}
