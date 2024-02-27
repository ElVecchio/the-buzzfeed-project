import { Injectable } from '@angular/core';
import QuizzData from '../models/quizz.data';
import { Observable } from 'rxjs';
//import  data  from '../../assets/json/data.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) { }

  loadQuizzData():Observable<any>{
    let quizz_data:any = this.http.get('assets/json/data.json');
    return quizz_data;
  }
}
