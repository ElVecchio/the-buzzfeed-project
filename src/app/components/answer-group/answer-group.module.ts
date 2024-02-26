import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerItemComponent } from '../answer-item/answer-item.component';

@NgModule({
  declarations: [ AnswerItemComponent ],
  exports: [ AnswerItemComponent ],
  imports: [
    CommonModule
  ]
})
export class AnswerGroupModule { }
