import { Component, Input, OnInit } from '@angular/core';
import BackendErrors from 'src/app/shared/models/backendErrors';

@Component({
  selector: 'med-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('errors') errorsProps: BackendErrors = {};

  errorsMessages: string[] = [];

  ngOnInit(): void {
    this.errorsMessages = Object.keys(this.errorsProps).map((name: string) => {
      const messages = this.errorsProps[name].join(', ');
      return `${name}: ${messages}`;
    });
  }
}
