import { Component, Input } from '@angular/core';
import { Answerdata as AnswerData } from '../../models/answer.data';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrl: './answer-item.component.css'
})
export class AnswerItemComponent {

  @Input() answer:AnswerData = {
    id : 0,
    answer_text : '',
    question_id : 0
  }

}
