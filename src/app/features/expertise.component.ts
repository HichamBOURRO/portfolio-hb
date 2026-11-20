// src/app/features/expertise.component.ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-expertise',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="expertise" class="section">
      <div class="container">
        <header class="section__head" appReveal>
          <p class="eyebrow mono">{{ c().ui.expertiseEyebrow }}</p>
          <h2>{{ c().ui.expertiseTitle }}</h2>
          <p class="section__lead">{{ c().ui.expertiseLead }}</p>
        </header>

        <div class="cards">
          @for (item of c().principles; track $index; let i = $index) {
            <article class="card" appReveal>
              <span class="mono card__num">0{{ i + 1 }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
              <ul class="chips">
                @for (tag of item.tags; track tag) {
                  <li class="chip">{{ tag }}</li>
                }
              </ul>
            </article>
          }
        </div>

        <div class="duo">
          <article class="card card--flat" appReveal>
            <p class="eyebrow mono">{{ c().ui.education }}</p>
            <h3>{{ c().profile.education.degree }}</h3>
            <p>{{ c().profile.education.field }}</p>
            <p class="mono muted">{{ c().profile.education.school }} · {{ c().profile.education.period }}</p>
          </article>
          <article class="card card--flat" appReveal>
            <p class="eyebrow mono">{{ c().ui.methods }}</p>
            <ul class="badges">
              @for (method of c().profile.methods; track method) {
                <li class="badge mono">{{ method }}</li>
              }
            </ul>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ExpertiseComponent {
  protected readonly c = inject(I18nService).content;
}
