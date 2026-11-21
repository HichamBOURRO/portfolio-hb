// src/app/features/contact.component.ts
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="section section--alt">
      <div class="container contact" appReveal>
        <div>
          <p class="eyebrow mono">{{ c().ui.contactEyebrow }}</p>
          <h2>{{ c().ui.contactTitle }}</h2>
          <p class="section__lead">{{ c().ui.contactLead }}</p>
          <div class="hero__cta">
            <a class="btn btn--primary" [href]="'mailto:' + c().profile.email">{{ c().ui.sendEmail }} <span aria-hidden="true">→</span></a>
            <button type="button" class="btn btn--ghost" (click)="copyEmail()">
              {{ copied() ? c().ui.copied : c().ui.copyEmail }}
            </button>
          </div>
        </div>

        <ul class="contact__list">
          <li>
            <span class="mono muted">{{ c().ui.emailLabel }}</span>
            <a [href]="'mailto:' + c().profile.email">{{ c().profile.email }}</a>
          </li>
          <li>
            <span class="mono muted">{{ c().ui.phoneLabel }}</span>
            <a [href]="'tel:' + c().profile.phoneHref">{{ c().profile.phone }}</a>
          </li>
          <li>
            <span class="mono muted">{{ c().ui.locationLabel }}</span>
            <span>{{ c().profile.location }}</span>
          </li>
        </ul>
      </div>

      <footer class="container footer mono">
        <span>© {{ year }} {{ c().profile.firstName }} {{ c().profile.lastName }}</span>
        <nav class="footer__links" aria-label="Réseaux">
          <a [href]="c().profile.linkedin" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>
            </svg>
            LinkedIn
          </a>
          <a [href]="c().profile.github" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor">
              <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3Z"/>
            </svg>
            GitHub
          </a>
        </nav>
      </footer>
    </section>
  `,
})
export class ContactComponent {
  protected readonly c = inject(I18nService).content;
  protected readonly year = new Date().getFullYear();
  protected readonly copied = signal(false);

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.c().profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = `mailto:${this.c().profile.email}`;
    }
  }
}
