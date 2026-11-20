// src/app/shared/logo.component.ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Icône « H> » : le H de Hicham dont la barre centrale devient un chevron d'invite de commande.
 * Deux piliers reliés par le code.
 */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'logo' },
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 64 64" role="img" [attr.aria-label]="label()">
      <rect class="logo__bg" x="1.5" y="1.5" width="61" height="61" rx="15" />
      <rect class="logo__pillar" x="16" y="16" width="8" height="32" rx="3" />
      <rect class="logo__pillar" x="40" y="16" width="8" height="32" rx="3" />
      <path class="logo__chevron" d="M28 24 L36 32 L28 40" />
    </svg>
  `,
})
export class LogoComponent {
  readonly size = input(36);
  readonly label = input('Hicham');
}
