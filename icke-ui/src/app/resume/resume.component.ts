import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Georg Ludewig - Software Engineer - Resume');
  }

  ngOnInit() {
  }

}
