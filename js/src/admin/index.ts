import app from 'flarum/admin/app';

app.initializers.add('mbl/news-section', () => {
  console.log('[mbl/news-section] Hello, admin!');
  app.extensionData.for('mbl-news-section').registerSetting({
    setting: 'mbl-news-section.is-active',
    label: 'Is active',
    type: 'boolean',
  });
});
