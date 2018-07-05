import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public navbarCollapsed = true;

  constructor(private router: Router,
              @Inject(PLATFORM_ID) private platformId: string) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
    }
  }
}
