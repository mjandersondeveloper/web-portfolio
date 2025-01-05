import { Component, OnInit } from '@angular/core';
import { PROFILE_CONSTANTS } from '../profile-constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projectData: any =[];

  constructor() { }

  ngOnInit() {
    this.projectData = PROFILE_CONSTANTS.projectData;
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projectData.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
}
