import { Injectable } from '@angular/core';
import { QuestionData } from '../models/question.data';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{

  theme_id : number | undefined;

  constructor() { }

  saveQuestions(questions:Array<QuestionData>):void{
    localStorage.setItem('questions', JSON.stringify(questions));
  }

  protected loadQuestions():Array<QuestionData> | null | undefined{

    let local_data = localStorage.getItem('questions');

    if(local_data!=null){
      let questions:Array<QuestionData> = JSON.parse(local_data);
      return this.theme_id==undefined ? questions : questions.filter(f => f.theme_id == this.theme_id);
    }else{
      return null;
    }
  }

  protected sortQuestion():QuestionData{

    let data = this.loadQuestions();

    if(data!=null && data.length > 0){

      let max = data.length;
      let question_index = Math.floor(Math.random() * max)
      return data[question_index];

    }else{
      throw new Error('Nenhuma pergunta encontrada. Verifique se os dados iniciais foram iunicializados.');
    }
  }

  loadQuestion(theme_id:number | undefined):QuestionData{
    this.theme_id = theme_id;
    return this.sortQuestion();
  }
}
