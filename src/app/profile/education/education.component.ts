import { Component, OnInit } from '@angular/core';
import { SplitPipe } from '../split.pipe';
import { PROFILE_CONSTANTS } from '../profile-constants';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [CommonModule, SplitPipe]
})
export class EducationComponent implements OnInit {

  educationData: any
  
  constructor() { }

  ngOnInit() {
    this.educationData =  PROFILE_CONSTANTS.educationData;
  }
}
