import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routerTransition } from '../../animations';

@Component({
  selector: 'app-root-2',
  animations: [ routerTransition ],
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }

}
