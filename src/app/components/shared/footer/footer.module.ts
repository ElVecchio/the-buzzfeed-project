import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';import { SocialMediasComponent } from '../../social-medias/social-medias.component';

@NgModule({
  declarations: [ FooterComponent, SocialMediasComponent ],
  exports: [FooterComponent, SocialMediasComponent],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
