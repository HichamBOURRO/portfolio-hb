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
        <span>{{ c().ui.builtWith }}</span>
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
