import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SplitPipe } from '../split.pipe';
import { PROFILE_CONSTANTS } from '../profile-constants';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommonModule, SplitPipe]
})
export class ExperienceComponent implements OnInit {

workExperience: any

  constructor() { }

  ngOnInit() {
    this.workExperience =  PROFILE_CONSTANTS.workExperienceData;
  }
}
