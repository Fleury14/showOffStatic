import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JRLoginService } from './../../services/jr-login-service';
import { JRPortfolioService } from './../../services/portfolio/jr-portfolio-service';

@Component({
  selector: 'app-public-view',
  templateUrl: './public-view.component.html',
  styleUrls: ['./public-view.component.css']
})

export class PublicViewComponent implements OnInit, AfterViewInit {

  private _numOfSkills = 0;
  private _numOfProjects = 0;
  public skillsArr = [];
  public projectsArr = [];
  // this is a object for the json
  public portfolioData;
  public profileData;
  public stuff;
  public iconLinks = {
    'coder': './../../../assets/img/personal-icons/monitor-2.png',
    'front-end': './../../../assets/img/personal-icons/monitor-3.png',
    'cloud': './../../../assets/img/personal-icons/network.png',
    'mobile': './../../../assets/img/personal-icons/responsive-design-symbol.png',
    'networker': './../../../assets/img/personal-icons/meeting.png'
  };
  public skillsLinks = {
    'angular': './../../../assets/img/skills/Angular.png',
    'bootstrap': './../../../assets/img/skills/Bootstrap.png',
    'c': './../../../assets/img/skills/C Programming.png',
    'cSharp': './../../../assets/img/skills/C#.png',
    'plus': './../../../assets/img/skills/C++.png',
    'css': './../../../assets/img/skills/CSS.png',
    'docker': './../../../assets/img/skills/docker.png',
    'git': './../../../assets/img/skills/Git.png',
    'html': './../../../assets/img/skills/HTML.png',
    'java': './../../../assets/img/skills/java.png',
    'javascript': './../../../assets/img/skills/JavaScript.png',
    'mongo': './../../../assets/img/skills/mongoDB.png',
    'mySQL': './../../../assets/img/skills/MySQL.png',
    'node': './../../../assets/img/skills/node.png',
    'php': './../../../assets/img/skills/PHP.png',
    'gres': './../../../assets/img/skills/PostgreSQL.png',
    'python': './../../../assets/img/skills/python.png',
    'r': './../../../assets/img/skills/R Language.png',
    'ruby': './../../../assets/img/skills/ruby.png',
    'sas': './../../../assets/img/skills/SAS.png',
    'sass': './../../../assets/img/skills/SASS.png',
    'selenium': './../../../assets/img/skills/Selenium.png',
    'SQL': './../../../assets/img/skills/SQL.png',
    'wordPress': './../../../assets/img/skills/WordPress.png'
  };

  constructor(private _portfolio_service: JRPortfolioService, private _login_service: JRLoginService) {  }

  ngOnInit() {
    for (let i = 0; i < this._numOfSkills; i++) {
      this.skillsArr.push('Skill!');
    }

    for (let i = 0; i < this._numOfProjects; i++) {
      this.projectsArr.push('Project!');
    }
    this._portfolio_service.getPortfolioInfo().subscribe(PortData => {
      // this initializes a json object
      this.portfolioData = PortData.json().data;
      this.stuff = this.portfolioData.User_ID;

      // used this for testing:
      console.log('this is data', this.portfolioData);

      this._login_service.getById(this.stuff).subscribe(logInData => {
        // this initializes a json object
        this.profileData = logInData.json().data;
        // used this for testing:
        console.log('this is login', this.profileData);
      });

    });

  }

  ngAfterViewInit() {
    switch (this.projectsArr.length) {
      case 0:
      document.getElementById('projectTitle').style.display = 'none';
      break;

      case 1:
      document.getElementById('project0').classList.add('col-sm-4', 'offset-sm-4');
      break;

      case 2:
      document.getElementById('project0').classList.add('col-sm-4', 'offset-sm-2');
      document.getElementById('project1').classList.add('col-sm-4');
      break;

      case 3:
      document.getElementById('project0').classList.add('col-sm-4');
      document.getElementById('project1').classList.add('col-sm-4');
      document.getElementById('project2').classList.add('col-sm-4');
      break;

      case 4:
      document.getElementById('project0').classList.add('col-sm-4', 'offset-sm-2');
      document.getElementById('project1').classList.add('col-sm-4');
      document.getElementById('project2').classList.add('col-sm-4', 'offset-sm-2');
      document.getElementById('project3').classList.add('col-sm-4');
      break;

      case 5:
      document.getElementById('project0').classList.add('col-sm-4');
      document.getElementById('project1').classList.add('col-sm-4');
      document.getElementById('project2').classList.add('col-sm-4');
      document.getElementById('project3').classList.add('col-sm-4', 'offset-sm-2');
      document.getElementById('project4').classList.add('col-sm-4');
      break;

      case 6:
      for (let i = 0; i < 6; i++) {
        document.getElementById('project' + i).classList.add('col-sm-4');
      }
    }
  }

}
