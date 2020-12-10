import { Component, OnInit } from '@angular/core';
import { faHome, faUserNurse, faUser  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faUserNurse = faUserNurse;
  faUser = faUser;

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  onResize(event){
    event.target.innerWidth; // window width
    if (this.navbarCollapsed === false){
      this.toggleNavbarCollapsing();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
