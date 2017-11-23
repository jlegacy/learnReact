import { HelloWorldLatestPage } from './app.po';

describe('hello-world-latest App', () => {
  let page: HelloWorldLatestPage;

  beforeEach(() => {
    page = new HelloWorldLatestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
