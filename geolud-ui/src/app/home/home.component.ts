import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Georg Ludewig - Software Engineer');
  }

  ngOnInit() {

  }

}
