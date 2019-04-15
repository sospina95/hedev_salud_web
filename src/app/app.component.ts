import { Component } from '@angular/core';
import { MessagingService } from "./factory/service/messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminHedev';
  message;

  constructor(private msgService: MessagingService) {}

  ngOnInit() {
  }
}
