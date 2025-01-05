import { Component, OnInit } from '@angular/core';
import { PROFILE_CONSTANTS } from '../profile-constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

workExperience: any

  constructor() { }

  ngOnInit() {
    this.workExperience =  PROFILE_CONSTANTS.workExperienceData;
  }
}
