import { PipesTutorialPage } from './app.po';

describe('pipes-tutorial App', () => {
  let page: PipesTutorialPage;

  beforeEach(() => {
    page = new PipesTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
