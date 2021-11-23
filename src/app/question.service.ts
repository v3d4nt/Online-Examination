import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question/Question';

@Injectable({
    providedIn: 'root'
})

export class QuestionService{

    constructor(private myHttp: HttpClient){}

    addQuestionService(newQuestion: Question): Observable<Question>
    {
        console.log("addQuestionService() invoked");
        return this.myHttp.post<Question>("http://localhost:8085/question/addQuestion",newQuestion);    }
}