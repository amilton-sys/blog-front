import { FormValidationService } from './../../services/form-validation.service';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  standalone: true,
  imports: [],
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.scss',
})
export class ErrorMsgComponent {
  @Input() control: FormControl = new FormControl();
  @Input() label: string | undefined;

  get errorMessage() {
    if (this.control && this.control.errors && this.label) {
      for (const propertyName in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyName) &&
          this.control.touched
        ) {
          return FormValidationService.getErrorMessage(
            this.label,
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }
    }
    return null;
  }
}
