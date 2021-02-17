import { Component, OnInit } from '@angular/core';
import { UtilService } from './util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public isMenuEnabled: boolean = true;
  public selectedIndex = 0;
  public menuItems = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    }
  ];

  public labels = [
    'About us'
  ]

  constructor(
    private utilService: UtilService,
  ) {}

  ngOnInit() {
    this.utilService.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;

    });
  }
}
