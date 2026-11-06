import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterModule]
})
export class AppComponent {
}
