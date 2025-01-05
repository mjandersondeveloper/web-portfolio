import { Component, OnInit } from '@angular/core';
import { PROFILE_CONSTANTS } from '../profile-constants';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationData: any
  
  constructor() { }

  ngOnInit() {
    this.educationData =  PROFILE_CONSTANTS.educationData;
  }
}
