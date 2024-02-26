import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerData } from '../models/answer.data';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor() { }

  answers:AnswerData[] = [];

  getQuestionAnswers(question_id:number):Array<AnswerData> {
    let answers = this.answers.filter(r=>r.question_id == question_id);
    return answers;
  }

}
