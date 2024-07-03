import {
  Component,
  inject,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styles: `
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #696969;
    }

  `,
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  cards: any = [
    {
      title: 'Card 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Card 2',
      body: 'Morbi consectetur, felis sed lobortis semper, ligula purus aliquet nisi, non laoreet neque nunc in dolor.',
    },
  ];

  private modalService = inject(NgbModal);

  openBackDropCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'xl' });
  }

  openFullscreen(content: TemplateRef<any>) {
    this.modalService.open(content, { fullscreen: true });
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openModalDialogCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }
}
