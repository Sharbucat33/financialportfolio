import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'financeDemo';
  activeTab: string = 'dashboard';
  private routerSub!: Subscription;

  constructor(private router: Router) {}

  /**
   * @method OnInit
   * @description first one to call when component is created
   */
  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navEnd = event as NavigationEnd;
        const url = navEnd.urlAfterRedirects;
        if (url.includes('investment')) {
          this.activeTab = 'investments';
        } else if (url.includes('dashboard')) {
          this.activeTab = 'dashboard';
        } else {
          this.activeTab = '';
        }
      });
  }

  /**
   * @method setActive
   * @param tab to get which tab we are switching
   */
  setActive(tab: string) {
    this.activeTab = tab;
  }

  /**
   * @method OnDestroy()
   * @description to unsubscribe the subscription
   */
  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
