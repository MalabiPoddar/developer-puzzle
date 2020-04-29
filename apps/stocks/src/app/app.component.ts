import { Component } from '@angular/core';
import { APP_CONSTANT } from './app.constants';

@Component({
  selector: 'coding-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = APP_CONSTANT.TITLE;
  public welcomeText: string = APP_CONSTANT.WELCOME_TEXT;
}
