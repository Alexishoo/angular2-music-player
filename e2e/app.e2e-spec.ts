import { Angular2MusicPlayerPage } from './app.po';

describe('angular2-music-player App', function() {
  let page: Angular2MusicPlayerPage;

  beforeEach(() => {
    page = new Angular2MusicPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
