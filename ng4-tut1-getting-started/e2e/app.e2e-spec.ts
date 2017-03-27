import { Ng4Tut1GettingStartedPage } from './app.po';

describe('ng4-tut1-getting-started App', () => {
  let page: Ng4Tut1GettingStartedPage;

  beforeEach(() => {
    page = new Ng4Tut1GettingStartedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
