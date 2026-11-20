// src/app/features/skills.component.ts
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="stack" class="section">
      <div class="container">
        <header class="section__head" appReveal>
          <p class="eyebrow mono">{{ c().ui.stackEyebrow }}</p>
          <h2>{{ c().ui.stackTitle }}</h2>
          <p class="section__lead">{{ c().ui.stackLead(total(), c().skills.length) }}</p>
        </header>

        <div class="filters" role="tablist" [attr.aria-label]="c().ui.filterAria" appReveal>
          <button type="button" role="tab" class="filter mono" [class.filter--on]="filter() === 'all'" [attr.aria-selected]="filter() === 'all'" (click)="filter.set('all')">
            {{ c().ui.filterAll }}
          </button>
          @for (cat of c().skills; track cat.id) {
            <button type="button" role="tab" class="filter mono" [class.filter--on]="filter() === cat.id" [attr.aria-selected]="filter() === cat.id" (click)="filter.set(cat.id)">
              {{ cat.label }}
            </button>
          }
        </div>

        <div class="skills">
          @for (cat of visible(); track cat.id) {
            <article class="card skill">
              <header class="skill__head">
                <h3>{{ cat.label }}</h3>
                <span class="mono muted">{{ cat.items.length }}</span>
              </header>
              <ul class="chips">
                @for (item of cat.items; track item) {
                  <li class="chip">{{ item }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  protected readonly c = inject(I18nService).content;
  protected readonly total = computed(() => this.c().skills.reduce((sum, cat) => sum + cat.items.length, 0));
  protected readonly filter = signal<string>('all');
  protected readonly visible = computed(() => {
    const current = this.filter();
    const skills = this.c().skills;
    return current === 'all' ? skills : skills.filter((cat) => cat.id === current);
  });
}
