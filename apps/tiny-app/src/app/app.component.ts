import { Component } from '@angular/core';
import { greet } from '@workspace/utils';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tiny-app';

  greeting = greet('rafa');
}
