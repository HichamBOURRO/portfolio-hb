// src/app/features/hero.component.ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { LogoComponent } from '../shared/logo.component';

@Component({
  selector: 'app-hero',
  imports: [LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="profil" class="hero">
      <div class="hero__grid" aria-hidden="true"></div>
      <div class="container hero__inner">
        <div class="hero__copy">
          <div class="hero__id">
            <app-logo class="logo--hero" [size]="84" [label]="c().ui.logoAlt" />
            <p class="pill mono"><span class="pill__dot"></span>{{ c().profile.status }}</p>
          </div>
          <h1 class="hero__name">
            {{ c().profile.firstName }}<br /><span class="accent">{{ c().profile.lastName }}</span>
          </h1>
          <p class="hero__title mono">// {{ c().profile.title }}</p>
          <p class="hero__pitch">{{ c().profile.pitch }}</p>
          <div class="hero__cta">
            <a class="btn btn--primary" href="#parcours">{{ c().ui.ctaJourney }} <span aria-hidden="true">→</span></a>
            <a class="btn btn--ghost" href="#contact">{{ c().ui.ctaContact }}</a>
            <a class="btn btn--ghost" [href]="c().profile.cv" download>{{ c().ui.ctaCv }}</a>
          </div>
        </div>

        <div class="terminal" role="img" [attr.aria-label]="c().ui.terminalAria">
          <div class="terminal__bar">
            <span></span><span></span><span></span>
            <em class="mono">identity.profile</em>
          </div>
          <div class="terminal__body mono">
            <p><span class="accent">hicham&#64;lead</span>:~$ whoami</p>
            @for (line of c().terminal; track line.key) {
              <p class="terminal__line"><span class="terminal__key">{{ line.key }}</span><span>{{ line.value }}</span></p>
            }
            <p><span class="accent">hicham&#64;lead</span>:~$ <span class="caret"></span></p>
          </div>
        </div>
      </div>

      <div class="container">
        <ul class="stats">
          @for (stat of c().stats; track $index; let i = $index) {
            <li class="stat">
              <span class="mono stat__num">0{{ i + 1 }}</span>
              <p class="stat__value">{{ stat.value }}</p>
              <p class="stat__label">{{ stat.label }}</p>
              <p class="stat__detail">{{ stat.detail }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly c = inject(I18nService).content;
}
