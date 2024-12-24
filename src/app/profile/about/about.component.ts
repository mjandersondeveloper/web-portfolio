import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
aboutDescription = '';
personalInformation: any;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.aboutDescription =  this.profileService.aboutDescription;
    this.personalInformation = this.profileService.getPersonalInformation();
  }
}
