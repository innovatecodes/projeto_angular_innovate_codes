import { Component } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  template: `
    <section class="row row-cols-1">
      <div class="col text-center mx-auto mt-0 mb-3 subtitle">
        <ng-content></ng-content>
      </div>
    </section>
  `,
})
export class SubtitleComponent {}
