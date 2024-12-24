import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  about1 = `Bullet 1 .
  Bullet 2 .
  Bullet 3 .
  Bullet 4`;

  about2 = 'Description here';
  resumeDownloadUrl = 'https://drive.google.com/file/d/12CYyyYLDHjG8bK0RfZARciSg8czH9IzY/view?usp=drive_link';

  projects:any = [
    {
      id: 1,
      title: 'Title',
      desc: 'Description',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/github_image.jpg',
      tech: 'Tech List'
    },
    {
      id: 2,
      title: 'Title',
      desc: 'Description',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/github_image.jpg',
      tech: 'Tech List'
    },
    {
      id: 3,
      title: 'Title',
      desc: 'Description',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/github_image.jpg',
      tech: 'Tech List'
    },
    {
      id: 4,
      title: 'Title',
      desc: 'Description',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/github_image.jpg',
      tech: 'Tech List'
    },
    {
      id: 5,
      title: 'Title',
      desc: 'Description',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/github_image.jpg',
      tech: 'Tech List'
    },
    {
      id: 6,
      title: 'Title',
      desc: 'Description',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/github_image.jpg',
      tech: 'Tech List'
    },
    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // }
  ];

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Skill 1',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Skill 2',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Skill 3',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Skill 4',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Skill 5',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'Skill 6',
      'progress': '70%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];

  experienceData: any = [
    {
      id: 1,
      company: 'Company 1',
      location: 'Location',
      timeline: 'Month Year to Present',
      role: 'Role',
      work: `Bullet 1 . 
      Bullet 2.`
    },
    {
      id: 2,
      company: 'Company 2',
      location: 'Location',
      timeline: 'Month Year to Month Year',
      role: 'Role',
      work: `Bullet 1 . 
      Bullet 2.`
    },
    {
      id: 3,
      company: 'Company 3',
      location: 'Location',
      timeline: 'Month Year to Month Year',
      role: 'Role',
      work: `Bullet 1 . 
      Bullet 2.`
    },
  ];

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ];

  getSkills(): Observable<any> {
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }

  getEducation(): Observable<any> {
    return this.educationData;
  }

  getExperience(): Observable<any> {
    return this.experienceData;
  }

  getExtraCircular(): Observable<any> {
    return this.extraCircularInfo;
  }
}
