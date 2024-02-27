import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { ProfileData } from '../../models/profile.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit, OnDestroy, OnChanges {

  @Input() quizz_data:any;
  title:string = '';
  question:string='';
  answers:any[] = [];
  index:number=0;
  quizz_item:any;
  show_result:boolean=false;
  player_score:number[]=[];
  final_profile!:any;
  profiles!:any;
  quizz_data_temp:any;
  final_score:number=0;

  constructor(private question_service:QuestionService, private navigator:Router){
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.quizz_data && this.quizz_data.length>0){
      this.quizz_data_temp = this.quizz_data;
      this.sortQuestion();
    }
  }

  ngOnInit(): void {
   this.reset();
  }

  //get the main quest
  sortQuestion():void{
    if(this.quizz_data.length > 1){
      //raffle themes and questions
      this.quizz_item = this.question_service.getQuestion(this.quizz_data);
      this.setQuestion();
    }else  if(this.quizz_data.length == 1){
      this.quizz_item = this.quizz_data[0];
      this.setQuestion();
    }else{
      //show restart
    }

    this.profiles = this.quizz_item.theme.profiles;

    //remove the selected item from array this way don't need control by index
    // and avoid show duplicated question
    if(this.quizz_data.length>0){
      this.quizz_data.splice(this.quizz_data.indexOf(this.quizz_item), 1)
    }
  }

  //go to next answer
  setQuestion():void{
    if(this.index < this.quizz_item.theme.questions.length){
      this.title = this.quizz_item.theme.title;
      this.question = this.quizz_item.theme.questions[this.index].text;
      this.answers = this.quizz_item.theme.questions[this.index].answers;
      this.index++;
    }else{
      this.calculateScore();
    }
  }
  calculateScore() {

    this.final_score = this.player_score.reduce((acc, cur) => acc + cur, 0);
    let max:number = this.profiles[0].weight;
    let med:number = this.profiles[1].weight;
    let low:number = this.profiles[2].weight;

    if(this.final_score >= max){
      this.final_profile = this.profiles[0];
    }else if(this.final_score < max && this.final_score >= med){
      this.final_profile = this.profiles[1];
    }else if(this.final_score < med && this.final_score >= low){
      this.final_profile = this.profiles[2];
    }
    this.show_result=true;
  }

  addUserAnswerPicker($event: any) {
    this.player_score.push($event.weight);
    this.setQuestion();
  }

  restart(arg0: string) {
    //I will implement this as soon as possible!!!!
   /*  if(arg0!='replay'){
      this.quizz_data = this.quizz_data_temp;
      this.sortQuestion();
    }else{
      this.reset();
      this.setQuestion();
    } */
    this.navigator.navigateByUrl('/DisplayComponent', { skipLocationChange: true }).then(() => {
      this.navigator.navigate(['']);
    });

  }

  reset(){
    this.title = '';
    this.question = '';
    this.answers = [];
    this.index = 0;
    this.show_result = false;
    this.player_score = [];
    this.final_profile = undefined;
    this.profiles = undefined;
    this.final_score=0;
  }

  ngOnDestroy(): void {
  }
}
