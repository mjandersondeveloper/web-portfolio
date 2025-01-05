import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { PROFILE_CONSTANTS } from '../profile-constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillData: any

  constructor() { }

    ngOnInit() {
      this.skillData =  PROFILE_CONSTANTS.skillsData;
    }
}
