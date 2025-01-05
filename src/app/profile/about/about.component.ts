import { Component, OnInit } from '@angular/core';
import { PROFILE_CONSTANTS } from '../profile-constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
aboutDescription = '';
personalInformation: any;

  constructor() { }

  ngOnInit() {
    this.aboutDescription =  PROFILE_CONSTANTS.aboutDescription;
    this.personalInformation = PROFILE_CONSTANTS.personalInformationData;
  }
}
