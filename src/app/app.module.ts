import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/shared/head/head.component';
import { AnswerGroupComponent } from './components/answer-group/answer-group.component';
import { QuestionDisplayComponent } from './components/question-display/question-display.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { DisplayComponent } from './pages/display/display.component';
import { FooterModule } from './components/shared/footer/footer.module';
import { AnswerGroupModule } from './components/answer-group/answer-group.module';
import { ThemeComponent } from './components/theme/theme.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizzComponent } from './components/quizz/quizz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    AnswerGroupComponent,
    QuestionDisplayComponent,
    MenuComponent,
    DisplayComponent,
    ThemeComponent,
    QuizzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    AnswerGroupModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
