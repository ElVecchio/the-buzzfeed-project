import { Component, Input, OnInit } from '@angular/core';
import { QuestionData } from '../../models/question.data';
import QuizzData from '../../models/quizz.data';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrl: './question-display.component.css'
})
export class QuestionDisplayComponent implements OnInit{

  @Input() quizz_data:any;

  question_data!:QuestionData;

  ngOnInit(): void {
    if(this.quizz_data){
      this.question_data = this.quizz_data.questions[0];
    }
  }
}
