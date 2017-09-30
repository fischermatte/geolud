import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f);
      if (element) {
        element.scrollIntoView(element);
      }
    })
  }

}
