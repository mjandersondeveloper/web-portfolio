import { Component, OnInit } from '@angular/core';
import { PROFILE_CONSTANTS } from '../profile-constants';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {

  resumeUrl: any

  constructor() { }

  ngOnInit() {
    this.resumeUrl =  PROFILE_CONSTANTS.resumeDownloadUrl
  }

}
