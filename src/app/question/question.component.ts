import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from './Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionObject: Question = new Question();

  constructor(private questionService: QuestionService) { }

  questionArray: Question[] = [];

  ngOnInit(): void {
  }

  reloadCurrentPage(){
    console.log("Page is reloading");
    
    window.location.reload;
  }

  saveQuestion(){
    console.log('saveQuestion()--> invoking addQuestionService');
    this.questionService.addQuestionService(this.questionObject).subscribe(
      (data: Question)=>{

        this.questionObject = data;
        console.log(this.questionObject);
        window.alert("Question: "+this.questionObject.questionText+
        "\nOption 1: "+this.questionObject.option1+
        "\nOption 2: "+this.questionObject.option2+
        "\nOption 3: "+this.questionObject.option3+
        "\nOption 4: "+this.questionObject.option4+
        "\nCorrect Option: "+this.questionObject.answer)

      },(err) => {
        console.log(err);
        
      }
    );
    
  }

}
