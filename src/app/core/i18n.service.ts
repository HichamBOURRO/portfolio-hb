// src/app/core/i18n.service.ts
import { Injectable, computed, effect, signal } from '@angular/core';
import { Content, FR } from '../data/profile';
import { EN } from '../data/profile.en';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(this.readStored());
  readonly content = computed<Content>(() => (this.lang() === 'fr' ? FR : EN));

  constructor() {
    effect(() => {
      const { firstName, lastName, title } = this.content().profile;
      document.documentElement.lang = this.lang();
      document.title = `${firstName} ${lastName} — ${title}`;
    });
  }

  toggle(): void {
    const next: Lang = this.lang() === 'fr' ? 'en' : 'fr';
    this.lang.set(next);
    try {
      localStorage.setItem('lang', next);
    } catch {
      /* stockage indisponible : la langue reste valable pour la session */
    }
  }

  private readStored(): Lang {
    try {
      return localStorage.getItem('lang') === 'en' ? 'en' : 'fr';
    } catch {
      return 'fr';
    }
  }
}
