import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrl: './question-display.component.css'
})
export class QuestionDisplayComponent implements OnInit, OnChanges, OnDestroy{


  @Input() question_text : string='';
  question:string='';

  ngOnChanges(changes: SimpleChanges): void {
    if(this.question_text!=''){
      this.question = this.question_text;
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
