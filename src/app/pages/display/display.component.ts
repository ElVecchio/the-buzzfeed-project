import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import QuizzData from '../../models/quizz.data';
import { QuizzService } from '../../services/quizz.service';
import { QuizzComponent } from '../../components/quizz/quizz.component';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit, OnDestroy {

  quizz_data:Array<QuizzData>=[];
  selectedQuizzes:QuizzData[]=[];
  quizz_item:QuizzData={
    id:0,
    profiles:[],
    questions:[],
    title:''
  }

  constructor(private quizzService:QuizzService, private quest:QuestionService){
  }

  loadQuizzData(){
    this.quizzService.loadQuizzData().subscribe({
      next:result =>{
        if(result!=undefined && result!=null){
          this.quizz_data = result;
        }
      },
      error: err =>{
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    this.loadQuizzData();
  }

  ngOnDestroy(): void {
  }
}
