import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-wrapper',
  // animations: [ routerTransition ],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }

}
