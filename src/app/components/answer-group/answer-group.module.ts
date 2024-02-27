import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerItemComponent } from '../answer-item/answer-item.component';
import { FinalAnswerComponent } from '../final-answer/final-answer.component';
@NgModule({
  declarations: [
    AnswerItemComponent,
    FinalAnswerComponent
  ],
  exports: [
    AnswerItemComponent,
    FinalAnswerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnswerGroupModule {
}
