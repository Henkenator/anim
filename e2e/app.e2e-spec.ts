import { AnimPage } from './app.po';

describe('anim App', function() {
  let page: AnimPage;

  beforeEach(() => {
    page = new AnimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
