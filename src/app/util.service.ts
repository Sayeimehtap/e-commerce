import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  private isMenuEnabled = new Subject<boolean>();

  //Creating method to handle SideMenu state (Enable or Disable)
  setMenuState(enabled) {
    this.isMenuEnabled.next(enabled);
  }

  getMenuState(): Subject<boolean> {
    return this.isMenuEnabled;
  }
}
