import { SgmExemploPage } from './app.po';

describe('sgm-exemplo App', () => {
  let page: SgmExemploPage;

  beforeEach(() => {
    page = new SgmExemploPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
