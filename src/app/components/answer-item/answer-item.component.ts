import { Component, Input } from '@angular/core';
import { AnswerData as AnswerData } from '../../models/answer.data';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrl: './answer-item.component.css'
})
export class AnswerItemComponent {

  @Input() answer:AnswerData = {
    id : 0,
    text : '',
    question_id : 0,
    weight:0
  }
}
