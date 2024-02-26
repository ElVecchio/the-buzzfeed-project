import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrl: './social-medias.component.css'
})
export class SocialMediasComponent {

  @Input() horizontalPlacement:string = 'center';
  github_project_url = environment.github_link;

}
