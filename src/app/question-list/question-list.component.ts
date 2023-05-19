import { Component } from '@angular/core';

import { question } from '../questions';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  questionList = question;

  constructor(private router: Router) {}

  onSubmit(form: NgForm){
    alert("Submit");
    console.log(form.value);
    //this.sharedService.
    this.router.navigate(["/correction", form.value]);

    //alert(form.value);
  }

}
