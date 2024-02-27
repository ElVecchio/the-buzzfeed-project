import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ProfileData } from '../../models/profile.data';

@Component({
  selector: 'app-final-answer',
  templateUrl: './final-answer.component.html',
  styleUrl: './final-answer.component.css'
})
export class FinalAnswerComponent implements OnChanges, OnDestroy{

  @Input() profile:ProfileData | undefined;
  @Input() final_score:number=0;

  title:string='';
  score:number=0;
  profile_image:string='';
  final_text:string='';

  ngOnChanges(changes: SimpleChanges): void {
      if(this.profile!=undefined){
        console.log(this.profile);
        this.title = this.profile.title;
        this.score = this.final_score;
        this.final_text = this.profile.description
        this.profile_image = this.profile.picture;
      }
  }

  ngOnDestroy(): void {
  }
}
