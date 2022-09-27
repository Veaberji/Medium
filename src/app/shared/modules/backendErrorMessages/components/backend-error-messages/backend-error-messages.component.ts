import { Component, Input, OnInit } from '@angular/core';
import BackendErrors from 'src/app/shared/models/backendErrors';

@Component({
  selector: 'med-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
})
export class BackendErrorMessagesComponent implements OnInit {
  errorsMessages: string[] = [];
  @Input() errors: BackendErrors = {};

  ngOnInit(): void {
    this.errorsMessages = Object.keys(this.errors).map((name: string) => {
      const messages = this.errors[name].join(', ');
      return `${name}: ${messages}`;
    });
  }
}
