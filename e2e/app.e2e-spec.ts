import { ChitchatPage } from './app.po';

describe('chitchat App', () => {
  let page: ChitchatPage;

  beforeEach(() => {
    page = new ChitchatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
