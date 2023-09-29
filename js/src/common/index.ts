import app from 'flarum/common/app';

app.initializers.add('mbl/news-section', () => {
  console.log('[mbl/news-section] Hello, forum and admin!');
});
