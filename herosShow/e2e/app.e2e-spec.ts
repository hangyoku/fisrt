import { HerosShowPage } from './app.po';

describe('heros-show App', () => {
  let page: HerosShowPage;

  beforeEach(() => {
    page = new HerosShowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
