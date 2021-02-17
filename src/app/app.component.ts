import { Component, OnInit } from '@angular/core';
import { UtilService } from './util.service';
import { menuController } from '@ionic/core';
import { Router } from '@angular/router'

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
    private router: Router,
  ) {}

  ngOnInit() {
    this.selectedIndex = 1;
    this.utilService.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;

    });
  }

  navigate(path, selectedId) {
    this.selectedIndex = selectedId;
    this.router.navigate([path]);
  }

  onToggleMenu() {
    menuController.toggle();
  }
}
