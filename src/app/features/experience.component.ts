// src/app/features/experience.component.ts
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { EXPERIENCES } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="parcours" class="section section--alt">
      <div class="container">
        <header class="section__head" appReveal>
          <p class="eyebrow mono">{{ c().ui.journeyEyebrow }}</p>
          <h2>{{ c().ui.journeyTitle }}</h2>
          <p class="section__lead">{{ c().ui.journeyLead }}</p>
        </header>

        <ol class="timeline">
          @for (xp of c().experiences; track xp.id) {
            <li class="xp" [class.xp--current]="xp.current" appReveal>
              <div class="xp__period mono">
                {{ xp.period }}
                @if (xp.current) {
                  <span class="xp__live">{{ c().ui.current }}</span>
                }
              </div>
              <article class="xp__card">
                <h3>{{ xp.role }}</h3>
                <p class="xp__org">
                  <strong>{{ xp.company }}</strong>
                  @if (xp.client) {
                    <span class="muted"> · {{ c().ui.client }} : </span><strong class="accent">{{ xp.client }}</strong>
                  }
                </p>
                <ul class="xp__bullets">
                  @for (bullet of xp.bullets; track $index) {
                    <li>
                      {{ bullet.text }}
                      @if (bullet.children) {
                        <ul>
                          @for (child of bullet.children; track child) {
                            <li>{{ child }}</li>
                          }
                        </ul>
                      }
                    </li>
                  }
                </ul>

                <button type="button" class="xp__toggle mono" (click)="toggle(xp.id)" [attr.aria-expanded]="isOpen(xp.id)">
                  {{ isOpen(xp.id) ? '−' : '+' }} {{ c().ui.techEnv }}
                </button>
                @if (isOpen(xp.id)) {
                  <dl class="stack">
                    @for (group of xp.stack; track group.label) {
                      <div class="stack__row">
                        <dt class="mono">{{ group.label }}</dt>
                        <dd>
                          <ul class="chips">
                            @for (item of group.items; track item) {
                              <li class="chip">{{ item }}</li>
                            }
                          </ul>
                        </dd>
                      </div>
                    }
                  </dl>
                }
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  protected readonly c = inject(I18nService).content;
  private readonly opened = signal<ReadonlySet<string>>(new Set([EXPERIENCES[0].id]));

  protected isOpen(id: string): boolean {
    return this.opened().has(id);
  }

  protected toggle(id: string): void {
    this.opened.update((current) => {
      const next = new Set(current);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  }
}
