// src/app/shared/reveal.directive.ts
import { Directive, ElementRef, afterNextRender, inject, DestroyRef } from '@angular/core';

/** Fait apparaître l'élément en douceur lorsqu'il entre dans le viewport. */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class RevealDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      if (!('IntersectionObserver' in window)) {
        node.classList.add('in');
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('in');
              observer.disconnect();
            }
          }
        },
        { threshold: 0.08 },
      );
      observer.observe(node);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
