import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import QuizzData from '../../models/quizz.data';
import { QuizzService } from '../../services/quizz.service';
import { AnswerGroupComponent } from '../answer-group/answer-group.component';
import { QuestionDisplayComponent } from '../question-display/question-display.component';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit, OnDestroy {

  @Input() quizz_data:Array<QuizzData>=[];
  title:string = "";

  constructor(){
  }

  ngOnInit(): void {
    if(this.quizz_data.length>0){
      this.title = this.quizz_data[0].title;
    }
  }

  ngOnDestroy(): void {

  }
}
