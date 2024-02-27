import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerData as AnswerData } from '../../models/answer.data';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrl: './answer-item.component.css'
})
export class AnswerItemComponent {

  @Output() public answerClickedEvent: EventEmitter<any> = new EventEmitter();
  @Input() answer:AnswerData = {
    id : 0,
    text : '',
    question_id : 0,
    weight:0
  }

  answerClick() {
    this.answerClickedEvent.emit({id:this.answer.id, weight:this.answer.weight});
  }

}


