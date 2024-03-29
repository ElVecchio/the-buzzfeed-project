import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './pages/display/display.component';

const routes: Routes = [
  { path:'', component: DisplayComponent, pathMatch:'full'},
  { path:'**', component: DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
