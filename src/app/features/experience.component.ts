// src/app/features/experience.component.ts
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { EXPERIENCES, SubPhase } from '../data/profile';
import { RevealDirective } from '../shared/reveal.directive';

/**
 * Parcours affiché façon `git checkout` : une branche par expérience,
 * une seule carte visible à la fois.
 */
@Component({
  selector: 'app-experience',
  imports: [NgTemplateOutlet, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="parcours" class="section section--alt">
      <div class="container">
        <header class="section__head" appReveal>
          <p class="eyebrow mono">{{ c().ui.journeyEyebrow }}</p>
          <h2>{{ c().ui.journeyTitle }}</h2>
          <p class="section__lead">{{ c().ui.journeyLead }}</p>
        </header>

        <div class="gitlog" appReveal>
          <div class="terminal gitlog__term">
            <div class="terminal__bar">
              <span></span><span></span><span></span>
            </div>

            <div class="gitlog__tabs mono" role="tablist" [attr.aria-label]="c().ui.journeyTabsAria">
              @for (xp of c().experiences; track xp.id; let i = $index) {
                <button
                  type="button"
                  role="tab"
                  class="gitlog__tab"
                  [id]="'xp-tab-' + xp.id"
                  [class.is-active]="i === index()"
                  [attr.aria-selected]="i === index()"
                  aria-controls="xp-panel"
                  [tabIndex]="i === index() ? 0 : -1"
                  (click)="select(i)"
                  (keydown)="onKey($event)"
                >
                  {{ xp.id }}
                  @if (xp.current) {
                    <span class="gitlog__head">HEAD</span>
                  }
                </button>
              }
            </div>
          </div>

          @for (xp of [active()]; track xp.id) {
            <article class="xp__card gitlog__card" id="xp-panel" role="tabpanel" [attr.aria-labelledby]="'xp-tab-' + xp.id">
              <header class="gitlog__card-head">
                <div>
                  <h3>{{ xp.company }}</h3>
                  @if (phases().length === 1) {
                    <p class="xp__org">
                      <strong>{{ xp.role }}</strong>
                      @if (xp.client) {
                        <span class="muted"> · {{ c().ui.client }} : </span><strong class="accent">{{ xp.client }}</strong>
                      }
                    </p>
                  }
                </div>
                <p class="gitlog__period mono">
                  {{ xp.period }}
                  @if (xp.current) {
                    <span class="xp__live">● {{ c().ui.current }}</span>
                  }
                </p>
              </header>

              @if (phases().length === 1) {
                <ng-container *ngTemplateOutlet="bulletList; context: { $implicit: xp.bullets }" />
              } @else {
                <div class="phases">
                  <div class="phases__bar mono">
                    <button type="button" class="phases__arrow" (click)="goPhase(phase() - 1)" [attr.aria-label]="c().ui.phasePrev">‹</button>
                    <div class="phases__dots">
                      @for (p of phases(); track $index; let i = $index) {
                        <button
                          type="button"
                          class="phases__dot"
                          [class.is-active]="i === phase()"
                          [attr.aria-current]="i === phase() ? 'step' : null"
                          [attr.aria-label]="p.title + (p.client ? ' · ' + p.client : p.scope ? ' · ' + p.scope : '')"
                          (click)="goPhase(i)"
                        ></button>
                      }
                    </div>
                    <button type="button" class="phases__arrow" (click)="goPhase(phase() + 1)" [attr.aria-label]="c().ui.phaseNext">›</button>
                    <span class="phases__count muted">{{ phase() + 1 }} / {{ phases().length }}</span>
                  </div>

                  <div class="phases__viewport" (pointerdown)="swipeStart($event)" (pointerup)="swipeEnd($event)" aria-live="polite">
                    @for (p of [phases()[phase()]]; track phase()) {
                      <div class="phases__slide" [class.from-left]="direction() < 0">
                        <h4 class="phases__title xp__org">
                          <strong>{{ p.title }}</strong>
                          @if (p.client) {
                            <span class="muted"> · {{ c().ui.client }} : </span><strong class="accent">{{ p.client }}</strong>
                          } @else if (p.scope) {
                            <span class="muted"> · </span><strong class="accent">{{ p.scope }}</strong>
                          }
                        </h4>
                        <ng-container *ngTemplateOutlet="bulletList; context: { $implicit: p.bullets }" />
                      </div>
                    }
                  </div>
                </div>
              }

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

              <footer class="gitlog__nav mono">
                @if (prev(); as p) {
                  <button type="button" (click)="select(index() - 1)" [attr.aria-label]="c().ui.journeyPrev + ' : ' + p.company">← {{ p.id }}</button>
                } @else {
                  <span></span>
                }
                <span class="muted">{{ index() + 1 }} / {{ c().experiences.length }}</span>
                @if (next(); as n) {
                  <button type="button" (click)="select(index() + 1)" [attr.aria-label]="c().ui.journeyNext + ' : ' + n.company">{{ n.id }} →</button>
                } @else {
                  <span></span>
                }
              </footer>
            </article>
          }

          <p class="gitlog__hint mono muted">{{ c().ui.journeyHint }}</p>
        </div>
      </div>
    </section>

    <ng-template #bulletList let-bullets>
      <ul class="xp__bullets">
        @for (bullet of bullets; track $index) {
          <li>
            {{ bullet.text }}
            @if (bullet.children) {
              <ul>
                @for (child of bullet.children; track $index) {
                  <li>{{ child }}</li>
                }
              </ul>
            }
          </li>
        }
      </ul>
    </ng-template>
  `,
})
export class ExperienceComponent {
  protected readonly c = inject(I18nService).content;
  protected readonly index = signal(0);
  protected readonly active = computed(() => this.c().experiences[this.index()]);
  protected readonly prev = computed(() => this.c().experiences[this.index() - 1]);
  protected readonly next = computed(() => this.c().experiences[this.index() + 1]);
  private readonly opened = signal<ReadonlySet<string>>(new Set([EXPERIENCES[0].id]));

  /** Phases de l'expérience active : la mission principale puis ses sous-phases. */
  protected readonly phases = computed<SubPhase[]>(() => {
    const xp = this.active();
    return [{ title: xp.role, client: xp.client, bullets: xp.bullets }, ...(xp.subs ?? [])];
  });
  protected readonly phase = signal(0);
  /** Sens du dernier changement de phase : 1 = vers la droite, -1 = vers la gauche. */
  protected readonly direction = signal(1);
  private swipeX: number | null = null;

  protected select(i: number): void {
    const count = this.c().experiences.length;
    this.index.set((i + count) % count);
    this.phase.set(0);
    this.direction.set(1);
  }

  protected goPhase(i: number): void {
    const count = this.phases().length;
    const target = (i + count) % count;
    if (target === this.phase()) return;
    this.direction.set(i < this.phase() ? -1 : 1);
    this.phase.set(target);
  }

  protected swipeStart(event: PointerEvent): void {
    this.swipeX = event.pointerType === 'mouse' ? null : event.clientX;
  }

  protected swipeEnd(event: PointerEvent): void {
    if (this.swipeX === null) return;
    const dx = event.clientX - this.swipeX;
    this.swipeX = null;
    if (Math.abs(dx) > 50) this.goPhase(this.phase() + (dx < 0 ? 1 : -1));
  }

  /** Navigation clavier des onglets (motif ARIA « tabs »). */
  protected onKey(event: KeyboardEvent): void {
    const last = this.c().experiences.length - 1;
    const moves: Record<string, number> = {
      ArrowRight: this.index() + 1,
      ArrowLeft: this.index() - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    this.select(moves[event.key]);
    const tabs = (event.currentTarget as HTMLElement).parentElement?.children;
    (tabs?.[this.index()] as HTMLElement | undefined)?.focus();
  }

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
