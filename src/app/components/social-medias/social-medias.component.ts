import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrl: './social-medias.component.css'
})
export class SocialMediasComponent {

  @Input() horizontalPlacement:string = 'center';

}
