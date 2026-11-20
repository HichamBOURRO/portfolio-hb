// src/app/app.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from './core/nav.component';
import { HeroComponent } from './features/hero.component';
import { ExpertiseComponent } from './features/expertise.component';
import { ExperienceComponent } from './features/experience.component';
import { SkillsComponent } from './features/skills.component';
import { ContactComponent } from './features/contact.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, HeroComponent, ExpertiseComponent, ExperienceComponent, SkillsComponent, ContactComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-nav />
    <main>
      <app-hero />
      <app-expertise />
      <app-experience />
      <app-skills />
      <app-contact />
    </main>
  `,
})
export class App {}
