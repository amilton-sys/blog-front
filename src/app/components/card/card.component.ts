import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, Input, inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class CardComponent {
  @Input() postId: number | undefined | null;
  @Input() title: string | undefined | null;
  @Input() description: string | undefined | null;
  @Input() content: string | undefined | null;
  @Input() thumb: string | undefined | null;
  @Input() createdAt: string | undefined | null;
  router = inject(Router);

  onDetail() {
    this.router.navigate(['/post', this.postId]);
  }
}
