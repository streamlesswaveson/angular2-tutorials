import { FirstAppDatabindingPage } from './app.po';

describe('first-app-databinding App', function() {
  let page: FirstAppDatabindingPage;

  beforeEach(() => {
    page = new FirstAppDatabindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
