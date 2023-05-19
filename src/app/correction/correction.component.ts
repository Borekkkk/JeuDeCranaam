import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { question } from '../questions';


@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.css']
})
export class CorrectionComponent implements OnInit {
  questionList=question;
  data_0: any;
  data_1: any;
  data_2: any;
  data_3: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data_0 = this.route.snapshot.paramMap.get('answer_0');
    this.data_1 = this.route.snapshot.paramMap.get('answer_1');
    this.data_2 = this.route.snapshot.paramMap.get('answer_2');
    this.data_3 = this.route.snapshot.paramMap.get('answer_3');
    alert(this.data_0 + this.data_1 + this.data_2 + this.data_3);
  }
}

