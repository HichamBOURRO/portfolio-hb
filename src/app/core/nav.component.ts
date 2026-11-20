// src/app/core/nav.component.ts
import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { I18nService } from './i18n.service';
import { LogoComponent } from '../shared/logo.component';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-nav',
  imports: [LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="nav" [class.nav--open]="open()">
      <div class="container nav__inner">
        <a class="brand" href="#profil" (click)="open.set(false)">
          <app-logo [size]="36" [label]="c().ui.logoAlt" />
          <span class="brand__name mono">hicham<span class="accent">_</span></span>
        </a>

        <nav class="nav__links" aria-label="Navigation">
          @for (link of c().ui.nav; track link.id; let i = $index) {
            <a [href]="'#' + link.id" [class.active]="active() === link.id" (click)="open.set(false)">
              <span class="mono nav__num">0{{ i + 1 }}</span>{{ link.label }}
            </a>
          }
        </nav>

        <div class="nav__actions">
          <button type="button" class="icon-btn icon-btn--text mono" (click)="i18n.toggle()" [attr.aria-label]="c().ui.switchLang" [title]="c().ui.switchLang">
            {{ c().ui.langLabel }}
          </button>
          <button type="button" class="icon-btn" (click)="toggleTheme()" [attr.aria-label]="theme() === 'dark' ? c().ui.themeLight : c().ui.themeDark">
            {{ theme() === 'dark' ? '☀' : '☾' }}
          </button>
          <a class="btn btn--ghost btn--sm" [href]="c().profile.cv" download>CV ↓</a>
          <button type="button" class="icon-btn nav__burger" (click)="open.set(!open())" [attr.aria-expanded]="open()" [attr.aria-label]="c().ui.menu">
            {{ open() ? '✕' : '☰' }}
          </button>
        </div>
      </div>
    </header>
  `,
})
export class NavComponent {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly i18n = inject(I18nService);
  protected readonly c = this.i18n.content;

  protected readonly open = signal(false);
  protected readonly active = signal('profil');
  protected readonly theme = signal<Theme>('dark');

  constructor() {
    afterNextRender(() => {
      this.applyTheme(this.readStoredTheme());

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const link of this.c().ui.nav) {
        const section = document.getElementById(link.id);
        if (section) observer.observe(section);
      }
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected toggleTheme(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* stockage indisponible : le thème reste valable pour la session */
    }
  }

  private applyTheme(theme: Theme): void {
    this.theme.set(theme);
    document.documentElement.dataset['theme'] = theme;
  }

  private readStoredTheme(): Theme {
    try {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  }
}
