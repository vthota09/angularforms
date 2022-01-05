import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMsg: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  topics = ['Angular','React','Vue'];
  topicHasError = true;
  submitted = false;
  errormsg = '';

  userModel = new User('bubby', 'bubby@test.com', 5676764666, 'default','morning', true);
  
  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
    }
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success', data),
      error => this.errormsg = error.statusText
    )
  }

  }
