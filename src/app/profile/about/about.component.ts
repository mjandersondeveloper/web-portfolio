import { Component, OnInit } from '@angular/core';
import { PROFILE_CONSTANTS } from '../profile-constants';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent implements OnInit {
aboutDescription: string;
personalInformation: any;

  constructor() { }

  ngOnInit() {
    this.aboutDescription =  PROFILE_CONSTANTS.aboutDescription;
    this.personalInformation = PROFILE_CONSTANTS.personalInformationData;
  }
}
