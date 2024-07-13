import { Injectable, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private modalService = inject(NgbModal);

  private showAlert(message: string, type: string) {
    this.modalService.dismissAll();
    const modalRef = this.modalService.open(AlertModalComponent);
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.message = message;
    setInterval(() => {
      modalRef.close();
    }, 3000);
  }

  showSuccess(message: string) {
    this.showAlert(message, 'success');
  }

  showDanger(message: string) {
    this.showAlert(message, 'danger');
  }
}
