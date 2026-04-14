import { Component, OnInit } from '@angular/core';
import { PROFILE_CONSTANTS } from '../profile-constants';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {

  skillData: any

  constructor() { }

    ngOnInit() {
      this.skillData =  PROFILE_CONSTANTS.skillsData;
    }
}
