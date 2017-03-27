import { browser, element, by } from 'protractor';

export class Ng4Tut1GettingStartedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
