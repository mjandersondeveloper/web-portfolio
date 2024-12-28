import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projectData: any =[];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.projectData = this.profileService.projectData;
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
