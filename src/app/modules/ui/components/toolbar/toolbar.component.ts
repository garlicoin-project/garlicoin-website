import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isSmall$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 675px)')
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver) { }
}
