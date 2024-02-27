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

  @ViewChild('quizz') quizzRef!: QuizzComponent;

  constructor(private quizzService:QuizzService, private quest:QuestionService){
  }

  loadQuizzData(){
    this.quizzService.loadQuizzData().subscribe({
      next:result =>{
        if(result!=undefined && result!=null){
          this.quizz_data = result;
          this.sortQuestion();
        }
      },
      error: err =>{
        console.log(err);
      }
    });
  }

  sortQuestion():void{

    //raffle themes and questions
    let quizz_item = this.quest.getQuestion(this.quizz_data);
    //add the selected quizz
    this.selectedQuizzes.push(quizz_item);
    //remove the selected item from array this way don't need control by index
    // and avoid show duplicated question
    this.quizz_data.splice(this.quizz_data.indexOf(quizz_item), 1)
  }

  ngOnInit(): void {
    this.loadQuizzData();
  }

  ngOnDestroy(): void {

  }
}
