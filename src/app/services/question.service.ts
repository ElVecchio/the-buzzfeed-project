import { Injectable } from '@angular/core';
import { QuestionData } from '../models/question.data';
import QuizzData from '../models/quizz.data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{

  constructor() { }

  quizz_data:QuizzData[]=[];

  protected getRandomQuestion():QuizzData{
    if(this.quizz_data!=null && this.quizz_data.length > 0){
      let sorted_index = Math.floor(Math.random() * this.quizz_data.length)
      let res:any = this.quizz_data[sorted_index];
      return res;
    }else{
      throw new Error('Nenhuma pergunta encontrada. Verifique se os dados iniciais foram iunicializados.');
    }
  }

  getQuestion(quizz_data:QuizzData[]):QuizzData{
    this.quizz_data = quizz_data;
    return this.getRandomQuestion();
  }
}
