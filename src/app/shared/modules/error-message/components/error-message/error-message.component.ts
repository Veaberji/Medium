import { Component, Input } from '@angular/core';

@Component({
  selector: 'med-error-message',
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  @Input() message: string = 'An unexpected error occurred';
}
