import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public categories = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.categories = this.dataService.getCategories();
    console.log(this.categories);
  }

}
