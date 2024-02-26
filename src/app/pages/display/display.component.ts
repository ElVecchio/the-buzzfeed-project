import { Component, OnDestroy, OnInit } from '@angular/core';
import QuizzData from '../../models/quizz.data';
import { QuizzService } from '../../services/quizz.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit, OnDestroy {

  quizz_data:Array<QuizzData>=[];

  constructor(private quizzService:QuizzService){}

  ngOnInit(): void {
    this.quizzService.loadQuizzData().subscribe({
      next:result =>{
        if(result!=undefined && result!=null){
          this.quizz_data = result;
          console.log(this.quizz_data);
        }
      },
      error: err =>{
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {

  }
}
