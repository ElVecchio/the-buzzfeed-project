import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerData } from '../../models/answer.data';

@Component({
  selector: 'app-answer-group',
  templateUrl: './answer-group.component.html',
  styleUrl: './answer-group.component.css'
})
export class AnswerGroupComponent {

  @Output() public getUserPickedAnswer:EventEmitter<any> = new EventEmitter();
  @Output() public selected_answer:any= {id:0, weight:0};
  @Input() answers_data:AnswerData[] = [];

  answerItemClick(args:any) {
    this.selected_answer = {id:args.id, weight:args.weight};
    this.getUserPickedAnswer.emit(this.selected_answer);
  }
}



