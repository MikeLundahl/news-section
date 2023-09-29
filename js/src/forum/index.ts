import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import NewsSection from "./components/NewsSection";

app.initializers.add('mbl/news-section', () => {

  extend(IndexPage.prototype, 'view', function (vdom) {
    const isActive: number = parseInt(app.forum.attribute('isActive'));

    if (isActive) {
      if ( vdom.children && vdom.children.splice) {
        vdom.children.splice(1,0, m(NewsSection));
      }
    }

  })


});
