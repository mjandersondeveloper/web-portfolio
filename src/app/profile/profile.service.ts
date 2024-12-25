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

  aboutDescription = `Senior software engineer with 6+ years of experience in leveraging various tools and technologies to 
  enhance business productivity. Proficient in software development, design, and testing, with a strong foundation 
  in agile development methodologies. Excellent communication skills, enabling effective collaboration with engineering 
  teams and business partners. Experienced in working with JavaScript and Java, utilizing Angular and SpringBoot frameworks 
  to build robust applications.`
  resumeDownloadUrl = 'https://drive.google.com/file/d/12CYyyYLDHjG8bK0RfZARciSg8czH9IzY/view?usp=drive_link';

  personalInformationData: any = [
    {
      title: 'Residence:',
      description: 'Columbus, OH'
    },
    {
      title: 'Employment:',
      description: 'Nationwide Insurance'
    },
    {
      title: 'Hobbies:',
      description: 'Bowling, Gaming, Coding, Kickball'
    },
    {
      title: 'Email:',
      description: 'mjandersondeveloper@gmail.com'
    },
    {
      title: 'Phone:',
      description: '(330) 247-8166'
    }
  ]
  
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
    }
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
      year: '2013 - 2017',
      degreeType: `Bachelor's of Science`,
      degreeDetail: 'Computer Science and Engineering Technology',
      university: 'University of Toledo',
      description: `Graduated Cum Laude .
      Coursework: Comparative Programming Languages, Advanced Website Design, Computer and Network Security, Introduction to Algorithms, Object Oriented Programming and Data Structures .
      Honors & Awards: Dean's List - Fall 2015, Fall 2016, Spring 2017, John O. Moseley Leadership School Scholarship, Gold Award Scholarship, Nordson BUILDS Scholarship Program .
      Activities & Societies: Sigma Alpha Epsilon, University of Toledo Student Government, University of Toledo Student Grievance Council, InterFraternity Council
      `
    },
    {
      year: '2020 - 2024',
      degreeType: `Master's of Science`,
      degreeDetail: 'Computer Science',
      university: 'Georgia Institute of Technology',
      description: `Specialized in Computing Systems .
      Enrolled in the Online Masters of Computer Science (OMSCS) program while employed at Nationwide Insurance .
      Coursework: Database System Concepts & Design, Introduction to Graduate Algorithms, Machine Learning For Trading, Software Analysis & Testing, Software Architecture and Design, Software Development Process
      `
    }
  ];

  workExperienceData: any = [
    {
      company: 'Nationwide Insurance',
      location: 'Columbus, OH',
      timeline: 'January 2018 - Present',
      role: 'Software Engineer',
      icon: 'assets/images/nationwide_logo.png',
      description: `Develop multiple webpages for Nationwide's self-servicing website using HTML, CSS, JavaScript, and the Angular framework. . 
      Created a SpringBoot microservice enabling customers to add ID cards to their Apple/Google Wallet via Nationwide's self-service website. .
      Conduct thorough unit testing with test runners such as Karma and Jasmine to ensure high-quality code. .
      Built and integrated data retrieval systems using API proxy calls within Nationwide's internet servicing application. .
      Configure Concourse pipelines to enhance project efficiency and streamline development processes.`
    },
    {
      company: 'Nationwide Insurance',
      location: 'Columbus, OH',
      timeline: 'May 2017 - August 2017',
      role: 'Software Engineer Internship',
      icon: 'assets/images/nationwide_logo.png',
      description: `Developed fixes for defective functions within the company's insurance policy application. .
      Participated in the company's Hack-a-thon event as a Back-End SQL Developer for my team. .
      Conducted code reviews for senior developers to ensure the efficiency of any code alterations. . 
      Gathered, analyzed, and documented the business needs of project stakeholders. .
      Engaged in daily team meetings using Scrum Agile methodology to assign story cards.`
    },
    {
      company: 'ProgressBook by Software Answers, Inc.',
      location: 'Brecksville, OH',
      timeline: 'May 2015 - May 2016',
      role: 'Application Developer Internship',
      icon: 'assets/images/software_answers_inc_logo.jpg',
      description: `Specific employment dates: May 2015 - Aug. 2015 and Jan. 2016 - May 2016 .
      Thoroughly debugged and resolved defective code within the company's application suite. .
      Constructed a controller method to support product linking between two different applications. .
      Developed and installed a new timeout function for an application page using JavaScript. .
      Collaborated with the COO and managers on performance enhancements for the company's applications. .
      Created, updated, and implemented data in school district databases using SQL.`
    },
  ];

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Title',
      description: '',
      img: 'img link',
      url: 'link'
    }
  ];

  getSkills(): Observable<any> {
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }

  getExtraCircular(): Observable<any> {
    return this.extraCircularInfo;
  }
}
