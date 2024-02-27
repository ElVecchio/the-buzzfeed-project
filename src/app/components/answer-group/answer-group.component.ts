import { Component, Input } from '@angular/core';
import { AnswerData } from '../../models/answer.data';

@Component({
  selector: 'app-answer-group',
  templateUrl: './answer-group.component.html',
  styleUrl: './answer-group.component.css'
})
export class AnswerGroupComponent {


  @Input() answers_data:AnswerData[] = [];


}



